import { Command, Executable, Param } from "@orbital/core";

@Command({
    name: 'say',
    description: 'Say hello to someone or something, typically [world].'
})
export class SayCommand extends Executable {

    execute(
        @Param({
            description: 'The phrase you want to be said',
        }) phrase: string = 'world'
    ) {
        console.log('Hello, ' + phrase + '!');
    }

}