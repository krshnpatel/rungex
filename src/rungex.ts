import { BaseCommand } from '@yarnpkg/cli';
import { Command, Option } from 'clipanion';
import t from 'typanion';

export class RungexCommand extends BaseCommand {
  static paths = [[`rungex`]];

  // Show descriptive usage for a --help argument passed to this command
  static usage = Command.Usage({
    description: `hello world!`,
    details: `
      This command will print a nice message.
    `,
    examples: [[
      `Add two numbers together`,
      `yarn addition 42 10`,
    ]],
  });

  a = Option.String({ validator: t.isNumber() });
  b = Option.String({ validator: t.isNumber() });

  async execute() {
    this.context.stdout.write(`${this.a}+${this.b}=${this.a + this.b}\n`);
  }
}
