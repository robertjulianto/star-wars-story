import { Starship } from "../types/starship";
import { AdditionalDetailComp } from "./additional_detail";

export const StarshipListComp = (props: {starships: Starship[]}) => {
    const { starships } = props;
    const starship_labels: string[] = starships.map(starship => `${starship.name} | ${starship.model}`);

    return (
        <AdditionalDetailComp title="Starships" values={starship_labels} />
    )
}
