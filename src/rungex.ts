import { Command, Option, Usage, UsageError } from 'clipanion';
import { Manifest } from '@yarnpkg/core';
import { ReadlineSync } from './utils/readlineSync';
import { execute } from '@yarnpkg/shell';
import { Logger, initLogger } from './utils/logger';
import chalk from 'chalk';

const COMMAND_NAME = 'rungex';

const COMMAND_USAGE: Usage = {
    description: 'Run multiple package.json scripts using Regex.',
    details:
        'This command will match package.json scripts with the inputted Regex string, prefix, or suffix. The user will then be prompted to run them if desired. The matched scripts could also be run in parallel to each other if the "-p" flag is specified. To skip the user prompt for running the matched scripts, the "-c" flag can be passed in.',
    examples: [
        [
            'Run all scripts matching the Regex: "lint.*"',
            'yarn rungex "lint.*"',
        ],
        ['Run all matching scripts in parallel', 'yarn rungex "lint.*" -p'],
        ['Run all scripts that start with "test"', 'yarn rungex "test" -sw'],
        ['Run all scripts that end with "build"', 'yarn rungex "build" -ew'],
        ['Run all scripts without user prompt', 'yarn rungex "build" -c'],
    ],
};

export class RungexCommand extends Command {
    static paths = [[COMMAND_NAME]];
    static usage = Command.Usage(COMMAND_USAGE);

    scriptMatcher: string = Option.String({ required: true });
    ci: boolean = Option.Boolean('-c,--ci', false);
    parallel: boolean = Option.Boolean('-p,--parallel', false);
    startsWith: boolean = Option.Boolean('-sw,--starts-with', false);
    endsWith: boolean = Option.Boolean('-ew,--ends-with', false);

    matchedScripts: string[] = [];
    log: Logger;

    async execute(): Promise<number> {
        this.log = initLogger(this.context.stdout);

        this.log.title('RUNGEX');
        this.log.newLine();

        // Input validation
        this.validate();

        // Get matching scripts
        const exitCode = await this.getMatchingScripts();
        if (exitCode !== -1) return exitCode;

        // Check if --ci option is passed
        if (this.ci) {
            return await this.runMatchedScripts();
        }
        // Else, display matched scripts and wait for input
        return await this.confirm();
    }

    validate() {
        if (this.startsWith && this.endsWith) {
            throw new UsageError(
                'Invalid option schema: mutually exclusive properties "startsWith" and "endsWith"'
            );
        }
    }

    async getMatchingScripts(): Promise<number> {
        const { fileName } = Manifest;
        const { scripts } = await Manifest.fromFile(fileName);

        this.log.info(`Looking for scripts in ${fileName}...`);
        if (scripts.size === 0) {
            this.log.info(
                chalk`{red There are no scripts defined in {bold ${fileName}}.}`
            );
            return 0;
        }
        this.log.info(
            chalk`{green Found ${scripts.size} script${
                scripts.size > 1 ? 's' : ''
            }!}\n`
        );

        this.log.info('Looking for matching scripts...');
        let matchedScriptsText = '';
        for (const script of scripts.keys()) {
            let matched = false;
            if (this.startsWith) {
                matched = script.startsWith(this.scriptMatcher);
            } else if (this.endsWith) {
                matched = script.endsWith(this.scriptMatcher);
            } else {
                matched = !!script.match(this.scriptMatcher)?.length;
            }

            if (matched) {
                const fullScript = `yarn ${script}`;
                this.matchedScripts.push(fullScript);
                matchedScriptsText += chalk`> {blue "${fullScript}"}\n`;
            }
        }

        if (this.matchedScripts.length === 0) {
            this.log.info(chalk`{red There were no matched scripts to run.}`);
            return 0;
        }

        this.log.info(
            chalk`{green Found ${this.matchedScripts.length} matched script${
                this.matchedScripts.length > 1 ? 's' : ''
            }:}`
        );
        this.log.info(`${matchedScriptsText}`);

        return -1;
    }

    async confirm(): Promise<number> {
        const readlineSync = new ReadlineSync({
            input: this.context.stdin,
            output: this.context.stdout,
        });

        const { answer } = await readlineSync.askQuestion(
            chalk.bold`{red !} Do you want to run the matched script${
                this.matchedScripts.length > 1 ? 's' : ''
            }? (y/N): `
        );

        this.log.newLine();

        if (['y', 'Y', 'yes', 'YES', 'Yes'].includes(answer)) {
            return await this.runMatchedScripts();
        } else {
            this.log.info(chalk.bold.red`Aborting...`);
            return 0;
        }
    }

    async runMatchedScripts(): Promise<number> {
        const startTime = new Date().getTime();
        if (this.parallel) {
            this.log.title('Running matched scripts in parallel');
            const executePromises = this.matchedScripts.map((script) =>
                execute(script)
            );
            await Promise.all(executePromises);
            this.log.done();
            this.log.newLine();
        } else {
            for (const script of this.matchedScripts) {
                this.log.title(`Running "${script}"`);
                await execute(`${script} || true`);
                this.log.done();
                this.log.newLine();
            }
        }
        const totalTime = new Date().getTime() - startTime;
        this.log.info(`Executed scripts in ${totalTime / 1000}s`);
        return 0;
    }
}
