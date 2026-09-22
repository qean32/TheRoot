import type { childrenProps } from "@/model";
import { useContext, type FC } from "react";
import { ModalContext } from "./modal-context";
import { useMount } from "@/lib/hook";
import { Portal } from "../portal";
import { cn } from "@/lib/utils";

export const Content: FC<childrenProps> = ({ children }: childrenProps) => {
    const context = useContext(ModalContext)
    if (!context) {
        return
    }
    const dispay = useMount(context.view)
    if (!dispay) {
        return null
    }

    return (
        <Portal>

            <div className={cn(
                "shadow z-40",
                !context.view && "shadow-close"
            )} onClick={context.toggle}>
            </div>

            <div className={cn(
                "fixed center bg-white z-50 p-10",
                (context.view ? "modal-open" : "modal-close")
            )}>
                {children}
            </div>

        </Portal>
    )
}
