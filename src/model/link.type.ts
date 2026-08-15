import type { ColorsType } from "@/config";
import type { idType } from "./id.type";
import type { tokenType } from "./token.type";

export type linkType = {
    tokens: tokenType[],
    name: string
    description: string
    color: ColorsType
    // type отвечает за "узор" линии
} & idType
