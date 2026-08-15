import type { childrenProps } from "@/model";
import { useContext, type FC } from "react";
import { ModalContext } from "./modal-context";

export const Close: FC<childrenProps> = ({ children }: childrenProps) => {
    const context = useContext(ModalContext)
    if (!context) {
        return
    }

    return <span onClick={context.off}>{children}</span>
}
