import { StoreContext } from "@/lib/hook/use-store";
import { RootStore } from "@/store/root";
import { useMemo } from "react";

export function MobX({ children }: { children: React.ReactNode }) {
    const store = useMemo(() => new RootStore(), []);

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );
}
