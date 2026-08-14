import type { Colors } from "@/config";
import type { Id } from "./id.type";
import type { Token } from "./token.type";

export type Link = {
    tokens: Token[],
    name: string
    description: string
    color: Colors
    // type отвечает за "узор" линии
} & Id
