import { createContext, useState } from "react";

export const PageContext = createContext<{
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>
}>({
    page: 1,
    setPage: () => {}
});

const PageContextProvider = ({ children }: any) => {
    const [page, setPage] = useState(1);

    return (
        <PageContext.Provider value={{ page, setPage }}>
            {children}
        </PageContext.Provider>
    )
}

export default PageContextProvider;