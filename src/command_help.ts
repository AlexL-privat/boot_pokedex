import { getCommands } from "./command.js";

export function commandHelp(){
    console.log("Welcome to the Pokedex!\nUsage:\n");
    for (const commandKey in getCommands()){
        const command = getCommands()[commandKey];
        console.log(`${command.name}: ${command.description}`);
    }
}