import axios from "axios";
import { Film } from "../types/film";
import { PlanetResponse } from "./responses/planet";
import { PersonResponse } from "./responses/person";
import { FilmResponse } from "./responses/film";
import { convertToPerson } from "./converters/people_converter";
import { SpeciesResponse } from "./responses/species";
import { Species } from "../types/species";
import { Starship } from "../types/starship";
import { StarshipResponse } from "./responses/starship";
import { VehicleResponse } from "./responses/vehicle";
import { People } from "../types/people";
import { Person } from "../types/person";
import { Vehicle } from "../types/vehicle";
import { PeopleResponse } from "./responses/people";

export const fetchAllPeople = async (page: number, callback: (data: People) => void) => {
    const peopleResponse: PeopleResponse | null = await fetchPeople(page);
    const people: People = {
        count: peopleResponse!.count,
        next: peopleResponse!.next,
        previous: peopleResponse!.previous,
        results: peopleResponse!.results.map(r => {return convertToPerson(r)})
    }
    callback(people);
}

export const getPerson = async (personId: string, callback: (data: Person) => void) => {
    const personResponse: PersonResponse | null = await fetchPerson(personId);

    if (personResponse != null){
        const person: Person = convertToPerson(personResponse)

        person.homeworld = await getPlanet(personResponse.homeworld);
        person.films = await getFilms(personResponse.films);
        person.species = await getSpecies(personResponse.species);
        person.starships = await getStarships(personResponse.starships);
        person.vehicles = await getVechicles(personResponse.vehicles);
        callback(person);
    }   
}

const BASE_URL: string = "https://swapi.dev/api";

const fetchData = async <T>(url: string) => {
    try{
        const res = await axios.get(`${url}`)
        //console.log(res.data);
        const data: T = res.data;
        return data;
    }
    catch(err) {
        //console.log(err);
        return null;
    }
}

const fetchPeople = async <PeopleResponse>(page: number) => {
    return await fetchData<PeopleResponse>(`${BASE_URL}/people?page=${page}`);
}

const fetchPerson = async <PersonResponse>(personId: string) => {
    return await fetchData<PersonResponse>(`${BASE_URL}/people/${personId}`);
}

const fetchPlanet = async <PlanetResponse>(url: string) => {
    return await fetchData<PlanetResponse>(url);
}

const fetchFilm = async <FilmResponse>(url: string) => {
    return await fetchData<FilmResponse>(url);
}

const fetchSpecies = async <SpeciesResponse>(url: string) => {
    return await fetchData<SpeciesResponse>(url);
}

const fetchStarship = async <StarshipResponse>(url: string) => {
    return await fetchData<StarshipResponse>(url);
}


const getPlanet = async (planetUrl: string) => {
    const planetResponse: PlanetResponse | null = await fetchPlanet(planetUrl);
    return planetResponse?.name!;

}

const getFilms = async (filmUrls: string[]) => {
     if (filmUrls.length == 0) return [];
    const filmResponses = await Promise.all<FilmResponse | null>(filmUrls.map(film => fetchFilm(film)));
    const films: Film[] = filmResponses.filter(x => x !== null).map(r => {
        return {
            title: r?.title,
            director: r?.director,
            producer: r?.producer
        }
    })
    return films
}

const getSpecies = async (speciesUrls: string[]) => {
     if (speciesUrls.length == 0) return [];
    const speciesResponses = await Promise.all<SpeciesResponse | null>(speciesUrls.map(species => fetchSpecies(species)));
    const species: Species[] = speciesResponses.filter(x => x !== null).map(r => {
        return {
            name: r?.name
        }
    }) 
    return species
}

const getStarships = async (starshipsUrl: string[]) => {
    if (starshipsUrl.length == 0) return [];
    const starshipsResponses = await Promise.all<StarshipResponse | null>(starshipsUrl.map(starships => fetchStarship(starships)));
    const starships: Starship[] = starshipsResponses.filter(x => x !== null).map(r => {
        return {
            name: r?.name,
            model: r?.model
        }
    }) 
    return starships
}

const getVechicles = async (vechiclesUrl: string[]) => {
    if (vechiclesUrl.length == 0) return [];
    const vechiclesResponses = await Promise.all<VehicleResponse | null>(vechiclesUrl.map(vechicles => fetchStarship(vechicles)));
    const vechicles: Vehicle[] = vechiclesResponses.filter(x => x !== null).map(r => {
        return {
            name: r?.name,
            model: r?.model
        }
    }) 
    return vechicles
}
