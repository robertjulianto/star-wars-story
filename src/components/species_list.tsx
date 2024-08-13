import { Species } from "../types/species"
import { AdditionalDetailComp } from "./additional_detail";

export const SpeciesListComp = (props: {species: Species[]}) => {
    const { species } = props;
    const species_names: string[] = species.map(s => s.name);
    
    return (
        <AdditionalDetailComp title="Species" values={species_names} />
    )
}
