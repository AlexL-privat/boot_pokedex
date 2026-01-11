export async function commandHelp(state) {
    console.log("Welcome to the Pokedex!\nUsage:\n");
    for (const commandKey in state.commands) {
        const command = state.commands[commandKey];
        console.log(`${command.name}: ${command.description}`);
    }
}
