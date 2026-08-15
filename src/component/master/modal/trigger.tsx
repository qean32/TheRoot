import type { childrenProps } from "@/model";
import { useContext, type FC } from "react";
import { ModalContext } from "./modal-context";

export const Trigger: FC<childrenProps> = ({ children }: childrenProps) => {
    const context = useContext(ModalContext)
    if (!context) {
        return
    }

    return <span onClick={context.toggle}>{children}</span>
}
