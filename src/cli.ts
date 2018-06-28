import { CLI } from '@orbital/core';
import { NewCommand } from './commands/new.command';
import { TestCommand } from './commands/test.command';

@CLI({
    name: 'ob',
    version: '1.0.0',
    prettyName: 'Orbital CLI',
    declarations: [
        NewCommand,
        TestCommand
    ],
})
export class MyCLI { }