import { CLI } from '@orbital/core';
import { SayCommand } from './commands/say.command';

@CLI({
    name: 'starter',
    version: '1.0.0',
    prettyName: 'Starter CLI',
    declarations: [SayCommand],
})
export class MyCLI { }