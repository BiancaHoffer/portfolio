import { createContext, ReactNode, useContext, useState, SetStateAction, Dispatch } from "react";

export const ActiveDrawerContext = createContext({} as ContextProps);

interface ContextProps {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
}

export function ActiveDrawerProvider(children: ReactNode) {
    const [active, setActive] = useState(false);

    return (
        <ActiveDrawerContext.Provider value={{ active, setActive }}>
            {children}
        </ActiveDrawerContext.Provider>
    )
}

export function useDrawer() {
    const context = useContext(ActiveDrawerContext);

    return context;
}