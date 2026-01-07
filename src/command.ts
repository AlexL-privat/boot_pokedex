import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";

//Asbtract type for CLI commands
export type CLICommand = {
  name: string;
  description: string;
  callback: (commands: Record<string, CLICommand>) => void;
};

//This function returns a record of available commands in the REPL
export function getCommands(): Record<string, CLICommand> {
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
