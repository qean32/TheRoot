import { useBoolean } from "@/lib/hook"
import type { childrenProps } from "@/model"
import { type FC } from "react"
import { ModalContext } from "./modal-context"

type Props = {
} & childrenProps

export const Root: FC<Props> = ({
    children
}: Props) => {
    const { boolean, swap, off } = useBoolean()


    return (
        <ModalContext.Provider value={{
            toggle: swap, view: boolean, off
        }}>
            <div className=""></div>
            <div className="">{children}</div>
        </ModalContext.Provider>
    )
}
