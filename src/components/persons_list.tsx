import { Link } from "react-router-dom";
import { Person } from "../types/person";

const PersonList = (props: {personList: Person[] | undefined}) => {
    const { personList } = props;

    return (
        <>
            <div className="flex flex-col gap-2 w-6/12">
            {
                personList && personList.map(person => {
                    return <PersonListItem key={person.person_id} text={person.name} personId={person.person_id}/>
                })
            }
            </div>
        </>
    );
}

const PersonListItem = (props: {personId: string, text: string}) => {
    const { personId, text } = props;
    
    return (
        <Link to={`./detail/${personId}`} className="border-4 border-yellow-300 bg-transparent rounded-full hover:bg-yellow-300 hover:border-black">
            <p className="text-yellow-300 text-center py-2 cursor-pointer hover:text-black">
                {text}
            </p>
        </Link>
    );
}

export default PersonList;