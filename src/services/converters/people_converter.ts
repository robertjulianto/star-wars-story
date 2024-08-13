import { Person } from "../../types/person"
import { PersonResponse } from "../responses/person"

type PersonResponseToPerson = (personResponse: PersonResponse) => Person;

const PERSON_URL = "https://swapi.dev/api/people/"

export const convertToPerson: PersonResponseToPerson = (personResponse: PersonResponse) => {
    const person_id: string = personResponse.url.replace(PERSON_URL, "").replace("/", "");
    return {
        name: personResponse.name,
        height: personResponse.height,
        mass: personResponse.mass,
        hair_color: personResponse.hair_color,
        skin_color: personResponse.skin_color,
        eye_color: personResponse.eye_color,
        birth_year: personResponse.birth_year,
        gender: personResponse.gender,
        homeworld: "",
        films: [],
        species: [],
        vehicles: [],
        starships: [],
        created: personResponse.created,
        edited: personResponse.edited,
        person_id: person_id
    }
}