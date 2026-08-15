import type { RootStore } from "@/store/root";
import { createContext, useContext } from "react";

export const StoreContext = createContext<RootStore | null>(null);

export function useStore() {
    const store = useContext(StoreContext);
    if (!store) {
        throw new Error('useStore должен использоваться внутри StoreProvider');
    }

    return store;
}
