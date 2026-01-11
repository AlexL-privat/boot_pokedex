import { State } from "./state.js";

// This function fetches and displays a list of locations from the PokeAPI, handling pagination.

export async function commandMap(state: State) {
        const locationData = await state.pokeapi.fetchLocations(state.nextLocationsURL);
        for (const location of locationData.results) {
            console.log(`${location.name}`);
        }
        // Update pagination URLs
        state.nextLocationsURL = locationData.next;
        state.prevLocationsURL = locationData.previous;
}


// This function fetches and displays the previous list of locations from the PokeAPI, handling pagination.

export async function commandMapBack(state: State) {
        if (state.prevLocationsURL === null) {
            console.log("you're on the first page");
            return;
        }
        const locationData = await state.pokeapi.fetchLocations(state.prevLocationsURL);
        for (const location of locationData.results) {
            console.log(`${location.name}`);
        }
        // Update pagination URLs
        state.nextLocationsURL = locationData.next;
        state.prevLocationsURL = locationData.previous;
    
    }

