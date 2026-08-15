import type { childrenProps } from "@/model";
import type { FC } from "react";
import { createPortal } from 'react-dom'

export const Portal: FC<childrenProps> = ({ children }: childrenProps) => {
    return <>{createPortal(children, document.body)}</>
}
