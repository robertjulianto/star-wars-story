import { useContext } from "react";
import { PageContext } from "../contexts/page_context";
import Button from "./button";

type PaginationProps = {
    canPrev: boolean
    canNext: boolean
    prevAction: () => void
    nextAction: () => void
}

const Pagination = (props: PaginationProps) => {
    const { page } = useContext(PageContext);
    const { canPrev, canNext, prevAction, nextAction} = props;
    return (
        <div className="mt-4">
            <div className="flex flex-row justify-between items-center gap-12">
                <Button onClick={() => prevAction()} label={"< Prev"} isVisible={canPrev} />
                <div className="flex gap-6">
                    <span className="text-yellow-300">Current page : {page}</span>
                </div>
                <Button onClick={() => nextAction()} label={"Next >"} isVisible={canNext} />
            </div>
        </div>              
    );
}

export default Pagination;