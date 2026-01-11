import { State } from "./state.js";

export async function commandHelp(state: State){
    console.log("Welcome to the Pokedex!\nUsage:\n");
    for (const commandKey in state.commands){
        const command = state.commands[commandKey];
        console.log(`${command.name}: ${command.description}`);
    }
}