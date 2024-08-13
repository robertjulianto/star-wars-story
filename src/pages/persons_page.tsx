import { useState, useEffect, useContext } from "react";
import PersonList from "../components/persons_list";
import { fetchAllPeople } from "../services/swapi_service";
import { People } from "../types/people";
import { PageLayout } from "../layouts/page_layout";
import { PageContext } from "../contexts/page_context";
import Pagination from "../components/pagination";
import Logo from "../components/logo";

const PersonsPage = () => {
    const { page, setPage } = useContext(PageContext);
    
    const [people, setPeople] = useState<People | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    

    useEffect(() => {
        fetchAllPeople(page, (data: People) => {
            setPeople(data);
            setLoading(() => false);
        });
    }, [page])

    const prevPageAction = () => {
        setPage(page => page = page - 1);
        setLoading(() => true);
    }

    const nextPageAction = () => {
        setPage(page => page = page + 1);
        setLoading(() => true);
    }

    
    return (
        <PageLayout isLoading={isLoading}>
            <div className="flex flex-col gap-x-3 justify-center w-8/12 mx-auto min-h-screen items-center">
                <Logo size="big" />

                <PersonList personList={people?.results}/> 

                <Pagination 
                    canPrev={people?.previous != null}
                    canNext={people?.next != null}
                    prevAction={prevPageAction}
                    nextAction={nextPageAction}
                />
            </div>
        </PageLayout>
    )
}

export default PersonsPage;
