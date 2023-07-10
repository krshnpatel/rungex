import { createInterface, Interface, ReadLineOptions } from 'readline';

export class ReadlineSync {
    readlineInterface: Interface;

    constructor(options: ReadLineOptions) {
        this.readlineInterface = createInterface(options);
    }

    askQuestion(question: string): Promise<{ answer: string }> {
        return new Promise((resolve) => {
            this.readlineInterface.pause();
            this.readlineInterface.question(question, (answer) => {
                resolve({ answer });
                this.readlineInterface.close();
            });
        });
    }
}
