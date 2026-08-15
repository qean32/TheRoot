import type { idType } from "./id.type";
import type { coordinateType } from "./position.type";

export type tokenType = {
    name: string
    path: string
    description: string
    position: coordinateType
} & idType
