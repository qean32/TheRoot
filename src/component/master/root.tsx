import type { FC, ReactNode } from "react";
import { MobX } from "./mobx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header } from "../widget";

export const Root: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }) => {
    return (
        <MobX>
            <Header />
            {children}
            <ToastContainer />
        </MobX>
    )
}
