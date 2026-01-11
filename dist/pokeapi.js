export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    // calls to fetch list of locations with pagination
    //if pageURL is not provided, fetches first page
    async fetchLocations(pageURL) {
        let res;
        if (!pageURL) {
            res = await fetch(`${PokeAPI.baseURL}/location-area/`);
        }
        else {
            res = await fetch(pageURL);
        }
        if (!res.ok)
            throw new Error("failed to fetch location");
        return res.json();
    }
    async fetchLocation(name) {
        const res = await fetch(`${PokeAPI.baseURL}/location-area/${name}`);
        if (!res.ok)
            throw new Error("failed to fetch location");
        return res.json();
    }
}
