import { useEffect, useState } from "react";
import { Person } from "../types/person";
import { getPerson } from "../services/swapi_service";
import { FilmListComp } from "../components/films_list";
import { SpeciesListComp } from "../components/species_list";
import { StarshipListComp } from "../components/starships_list";
import { VehicleListComp } from "../components/vehicles_list";
import { PageLayout } from "../layouts/page_layout";
import { Link, useParams } from "react-router-dom";
import PersonDetail from "../components/person_detail";
import Logo from "../components/logo";

const PersonDetailPage = () => {
    const { personId } = useParams();
    const [person, setPerson] = useState<Person | null>(null);

    useEffect(() => {
        getPerson(personId!, (data: Person) => {
            setPerson(data)
        });
    }, []);

    return (
        <PageLayout isLoading={person == null}>
            <div className="flex flex-col justify-center w-8/12">
                <div>
                    <div className="flex flex-row justify-between items-center my-4">
                        <Link to="/" className="text-yellow-300 bg-black hover:text-black hover:bg-yellow-300 rounded-full px-4 py-2">
                            <span>{"< Back"}</span>                        
                        </Link>
                        <Logo size="small" />
                    </div>
                    { person &&
                    <div>
                        <PersonDetail person={person!} />
                        <FilmListComp films={person!.films} />
                        <SpeciesListComp species={person!.species} />
                        <StarshipListComp starships={person!.starships} />
                        <VehicleListComp vehicles={person!.vehicles} />
                    </div>
                    }
                    
                </div>
            </div>
        </PageLayout>
    );
}


export default PersonDetailPage;