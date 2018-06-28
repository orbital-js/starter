import { Command, Executable, Param } from "@orbital/core";
import * as child_process from 'child_process';
var Git: any = require("nodegit");

@Command({
    name: 'new',
    description: 'Create a new Orbital CLI project'
})
export class NewCommand extends Executable {

    async execute(
        @Param({
            description: 'The name of this new project',
            required: true
        }) project: string
    ) {
        console.log('Cloning into ' + project);
        try {
            await Git.Clone('https://github.com/orbital-js/starter', './' + project);
        } catch (e) {
            console.log(e);

            console.log('Could not clone starter into ' + project);
            return;
        }
        console.log('New repository created in ' + project);

        child_process.execSync('cd ' + project);
        console.log('Installing Orbital dependencies with NPM');

        child_process.exec('npm install', (err, success) => {
            if (err) {
                console.log(err);
                return;
            }
            child_process.execSync('cd ../');
            console.log('Project ' + project + ' successfully created');
        });
    }

}