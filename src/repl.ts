import { createInterface } from "readline";
import { getCommands } from "./command.js";






//this function takes a string input. Bases on spaces, it splits the string into an array of strings and removes any extra spaces. It also converts all characters to lowercase.
export function cleanInput(input: string): string[] {
    return input.toLowerCase().split(" ").filter((s) => s.trim().length > 0);
}

export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex> ",
    });

    rl.prompt();
    
    rl.on("line", (line) => {
        const commands = cleanInput(line);
        if (commands.length === 0) {
            rl.prompt();
            return;
        }
        if (getCommands()[commands[0]]) {
            getCommands()[commands[0]].callback(getCommands());
        } else {
            console.log(`Unknown comand: ${commands[0]}`);
        }
        // Here you would handle other commands as needed
        rl.prompt();
    })
}
