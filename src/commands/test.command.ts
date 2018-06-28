import { Command, Executable } from "@orbital/core";
import * as path from 'path';
import * as shell from 'shelljs';
import { getConfig } from "../util/get-config";

@Command({
    name: 'test',
    description: 'Test a command of your CLI. Substitute `ob test` for your CLI name.'
})
export class TestCommand extends Executable {
    execute() {
        const config = getConfig();
        const mainFile = path.join(process.cwd(), config.entryFile || 'src/main.ts');
        // require(mainFile);
        const argv = process.argv.slice(3, Infinity).join(' ');
        const command = 'FORCE_COLOR=1 ts-node ' + mainFile + ' ' + argv;
        shell.exec(command)
    }
}