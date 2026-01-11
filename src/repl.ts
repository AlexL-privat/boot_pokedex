import { State } from "./state.js";

//this function takes a string input. Bases on spaces, it splits the string into an array of strings and removes any extra spaces. It also converts all characters to lowercase.
export function cleanInput(input: string): string[] {
    return input.toLowerCase().split(" ").filter((s) => s.trim().length > 0);
}

export async function startREPL(state: State): Promise<void> {
    state.readline.prompt();

    state.readline.on("line", async (line) => {
        const words = cleanInput(line);
        if (words.length === 0) {
            state.readline.prompt();
            return;
        }

        const commandName = words[0];
        const cmd = state.commands[commandName];

        if (!cmd) {
            console.log(
                `Unknown command: "${commandName}". Type "help" for a list of commands.`
            );
            state.readline.prompt();
            return;
        }
        try {
            await cmd.callback(state);
        } catch (error) {
            console.error("Error executing command:", error);
        }
        state.readline.prompt();
    });
}