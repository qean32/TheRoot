import type { FC, ReactNode } from "react";
import { MobX } from "./mobx";

export const Root: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
    return <MobX>
        {children}
    </MobX>
}
