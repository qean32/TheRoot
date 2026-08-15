import { useMount } from "@/lib/hook"
import { cn } from "@/lib/utils"
import type { ReactNode, MouseEventHandler, FC } from "react"
import { Portal } from "../portal"


interface Props {
    children: ReactNode
    view: boolean
    toggle: MouseEventHandler<HTMLDivElement>
}


export const RootMobX: FC<Props> = ({
    children,
    view,
    toggle
}: Props) => {
    const dispay = useMount(view)

    if (!dispay) {
        return null
    }


    return (
        <Portal>

            <div className={cn(
                "shadow z-50",
                !view && 'shadow-close'
            )} onClick={toggle} style={{ zIndex: 100 }}>
            </div>

            <div className={cn(
                'flex w-full h-full justify-center items-center',
                (view ? "modal-open" : "modal-close")
            )}>
                {view && children}
            </div>

        </Portal>
    )
}
