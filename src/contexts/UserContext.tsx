import { ReactNode, createContext, useState } from "react";

type BulbType = 'acesa' | 'apagada'

interface BulbProviderProps {
    children: ReactNode;
}

interface ContextValue {
    bulb: BulbType;
    toggleBulb: () => void;
}

export const BulbContext = createContext<ContextValue | undefined>(undefined);

export function BulbProvider({ children }: BulbProviderProps) {
    const [bulb, setBulb] = useState<BulbType>('acesa');


    function toggleBulb() {
        setBulb((bulb) => (bulb === 'acesa' ? 'apagada' : 'acesa'));
    }


    const contextValue: ContextValue = {
        bulb,
        toggleBulb,
    };
    

    return (
        <BulbContext.Provider value={contextValue}>
            {children}
        </BulbContext.Provider>
    );
}
