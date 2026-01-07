import { createInterface } from "readline";
export function cleanInput(input) {
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
        console.log(`Your command was: ${commands[0]}`);
        // Here you would handle other commands as needed
        rl.prompt();
    });
}
