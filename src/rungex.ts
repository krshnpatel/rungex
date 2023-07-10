import { BaseCommand } from '@yarnpkg/cli';
import { Command, Option, Usage } from 'clipanion';
import t from 'typanion';

const usage: Usage = {
    description: 'Run multiple package scripts using Regex.',
    details: `
  This command will print a nice message.
`,
    examples: [['Add two numbers together', 'yarn addition 42 10']],
};

export class RungexCommand extends BaseCommand {
    static paths = [['rungex']];

    // Show descriptive usage for a --help argument passed to this command
    static usage = Command.Usage(usage);

    a = Option.String({ validator: t.isString() });

    async execute() {
        this.context.stdout.write(`${this.a}\n`);
    }
}
