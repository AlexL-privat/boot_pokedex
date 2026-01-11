import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapBack } from "./command_map.js";
import { createInterface } from "readline";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const readline = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "pokedex> ",
    });
    //registry of available commands
    const commands = {
        exit: {
            name: "exit",
            description: "Exits the pokedex",
            callback: async (state) => await commandExit(state),
        },
        help: {
            name: "help",
            description: "displays all available commands",
            callback: async (state) => await commandHelp(state),
        },
        map: {
            name: "map",
            description: "Displays a list of locations from the PokeAPI",
            callback: async (state) => await commandMap(state),
        },
        mapb: {
            name: "mapb",
            description: "Displays the previous list of locations from the PokeAPI",
            callback: async (state) => await commandMapBack(state),
        },
        // can add more commands here
    };
    return { readline, commands, pokeapi: new PokeAPI(), nextLocationsURL: null, prevLocationsURL: null };
}
