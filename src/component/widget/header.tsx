import { swapTheme } from "@/lib/utils";
import type { FC } from "react";

export const Header: FC<{}> = () => {
    return <header className="h-16 bg-primary-dark" onClick={swapTheme}></header>
}
