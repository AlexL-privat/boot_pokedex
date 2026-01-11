export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() { }

    // calls to fetch list of locations with pagination
    //if pageURL is not provided, fetches first page

    async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
        let res: Response;
        if (!pageURL) {
            res = await fetch(`${PokeAPI.baseURL}/location-area/`);
        } else {
            res = await fetch(pageURL);
        }
        if (!res.ok) throw new Error("failed to fetch location");
        return res.json();
    }

    async fetchLocation(name: string): Promise<Location> {
        const res = await fetch(`${PokeAPI.baseURL}/location-area/${name}`);
        if (!res.ok) throw new Error("failed to fetch location");
        return res.json();
    }
}

//gets list of locations with pagination
//example(use pretty print to see structure -> https://pokeapi.co/api/v2/location-area

export type ShallowLocations = {
    next: string | null,
    previous: string | null,
    results: Array<{
        name: string,
        url: string
    }>
};


//gets detailed info about a location
//example(use pretty print to see structure -> https://pokeapi.co/api/v2/location-area/canalave-city-area
export type Location = {
    id: number,
    name: string,
    //add more properties here
};