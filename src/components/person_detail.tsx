import { Person } from "../types/person"

type DetailItem = {
    label: string,
    value: string
}

const PersonDetail = (props: {person: Person}) => {
    const { person } = props;
    const data: DetailItem[] = [
        {label: "Name", value: person?.name},
        {label: "Height", value: person?.height},
        {label: "Mass", value: person?.mass},
        {label: "Hair Color", value: person?.hair_color},
        {label: "Skin Color", value: person?.skin_color},
        {label: "Eye Color", value: person?.eye_color},
        {label: "Birth Year", value: person?.birth_year},
        {label: "Gender", value: person?.gender},
        {label: "Home world", value: person?.homeworld},
    ]
    
    return (
        <div className="bg-black text-yellow-300 border-yellow-300 border-4 rounded-xl my-2 p-4">
            <div>
                <h1 className="text-2xl mb-3">Detail</h1>
            </div>
            <div>
            {
                data.map(d => <PersonDetailItem key={d.label} label={d.label} value={d.value} />)
            }
            </div>
        </div>
    )
}

const PersonDetailItem = (props: {label: string; value: string}) => {
    const { label, value } = props;
    return (
        <div className="grid grid-cols-2 items-end">
            <div className="border-b border-yellow-300 pb-1">
                <label className="text-base text-left pr-6">{label}</label>
            </div>
            <div className="border-b border-yellow-300 pb-1">
                <p className="text-xl">{value}</p>
            </div>
        </div>
    )
}

export default PersonDetail;