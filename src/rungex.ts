import { Command, Option, Usage, UsageError } from 'clipanion';
import { Manifest } from '@yarnpkg/core';
import { ReadlineSync } from './utils/readlineSync';
import { execute } from '@yarnpkg/shell';

const COMMAND_NAME = 'rungex';

const COMMAND_USAGE: Usage = {
    description: 'Run multiple package scripts using Regex.',
    details: 'This command will print a nice message.',
    examples: [['Add two numbers together', 'yarn addition 42 10']],
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

    async execute(): Promise<number> {
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
                'Invalid option schema: mutually exclusive properties "startsWith", "endsWith"'
            );
        }
    }

    async getMatchingScripts(): Promise<number> {
        const { scripts } = await Manifest.fromFile(Manifest.fileName);

        // Check if there are any scripts in the manifest file
        if (scripts.size === 0) {
            this.context.stdout.write(
                `There are no scripts defined in ${Manifest.fileName}.\n`
            );
            return 0;
        }

        // Determine matched scripts
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
                matchedScriptsText += `-> "${fullScript}"\n`;
            }
        }

        // Check if there were any matched scripts
        if (this.matchedScripts.length === 0) {
            this.context.stdout.write(
                'There were no matched scripts to run.\n'
            );
            return 0;
        }

        // Else display all matched scripts
        this.context.stdout.write('Matched scripts:\n');
        this.context.stdout.write(`${matchedScriptsText}\n`);

        return -1;
    }

    async confirm(): Promise<number> {
        const readlineSync = new ReadlineSync({
            input: this.context.stdin,
            output: this.context.stdout,
        });

        const { answer } = await readlineSync.askQuestion(
            'Do you want to run the matched scripts? (y/N): '
        );
        if (['y', 'Y', 'yes', 'YES', 'Yes'].includes(answer)) {
            return await this.runMatchedScripts();
        } else {
            this.context.stdout.write('Aborting...\n');
            return 0;
        }
    }

    async runMatchedScripts(): Promise<number> {
        // const startTime = new Date().getTime();
        // console.log({ startTime });
        let exitCode = 0;
        if (this.parallel) {
            const executePromises = this.matchedScripts.map((script) =>
                execute(script)
            );
            const exitCodes = await Promise.all(executePromises);
            exitCode = exitCodes.some((code) => code) ? 1 : 0;
        } else {
            for (const script of this.matchedScripts) {
                this.context.stdout.write(
                    `\n===============================\nRunning "${script}"...\n===============================\n`
                );
                exitCode ||= await execute(script);
            }
        }
        // console.log({ totalTime: new Date().getTime() - startTime });
        return exitCode;
    }
}
