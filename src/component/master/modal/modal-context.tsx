import { createContext } from "react"

export const ModalContext = createContext<{
    view: boolean
    toggle: VoidFunction
    off: VoidFunction
} | null>(null)
