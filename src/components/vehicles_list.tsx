import { Vehicle } from "../types/vehicle";
import { AdditionalDetailComp } from "./additional_detail";

export const VehicleListComp = (props: {vehicles: Vehicle[]}) => {
    const { vehicles } = props;
    const vechicle_labels: string[] = vehicles.map(vechicle => `${vechicle.name} | ${vechicle.model}`);

    return (
        <AdditionalDetailComp title="Vechicles" values={vechicle_labels} />
    )
}
