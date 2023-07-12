import chalk from 'chalk';
import { Writable } from 'stream';

let logger: Logger;

const DIVIDER_LENGTH = 60;
const END_TEXT = 'DONE';
const END_TEXT_SPACE_AROUND = 1;

export const initLogger = (writer: Writable) => {
    return logger ? logger : new Logger(writer);
};

export class Logger {
    logger: Writable;

    constructor(writer: Writable) {
        this.logger = writer;
    }

    divider(style = chalk.white, count = DIVIDER_LENGTH) {
        this.logger.write(`${style('=').repeat(count)}\n`);
    }

    newLine(count = 1) {
        this.logger.write('\n'.repeat(count));
    }

    bold(text: string) {
        this.logger.write(`${chalk.bold(text)}\n`);
    }

    info(text: string) {
        this.logger.write(`${text}\n`);
    }

    title(text: string, dividerLength = DIVIDER_LENGTH) {
        const spaceLength = (dividerLength - text.length) / 2;
        const spaces = ' '.repeat(spaceLength);
        this.divider(chalk.blue, dividerLength);
        this.bold(`${spaces}${chalk.whiteBright(text)}`);
        this.divider(chalk.blue, dividerLength);
    }

    done() {
        const dividerSplitLength =
            (DIVIDER_LENGTH - END_TEXT.length - END_TEXT_SPACE_AROUND * 2) / 2;
        const divider = '='.repeat(dividerSplitLength);
        const spaceAround = ' '.repeat(END_TEXT_SPACE_AROUND);
        this.logger.write(
            chalk.red`${divider}${spaceAround}{bold ${END_TEXT}}${spaceAround}${divider}\n`
        );
    }
}
