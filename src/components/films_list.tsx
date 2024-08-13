import { Film } from "../types/film"
import { AdditionalDetailComp } from "./additional_detail";

export const FilmListComp = (props: {films: Film[]}) => {
    const { films } = props;
    const film_titles: string[] = films.map(film => film.title);
    
    return (
        <AdditionalDetailComp title="Films" values={film_titles} />
    )
}

