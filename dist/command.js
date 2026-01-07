import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
//This function returns a record of available commands in the REPL
export function getCommands() {
    return {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: commandExit,
        },
        help: {
            name: "help",
            description: "displays all available commands",
            callback: commandHelp,
        },
        // can add more commands here
    };
}
