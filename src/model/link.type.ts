import type { Colors } from "@/config";
import type { Id } from "./id.type";

export type Link = {
    name: string
    description: string
    color: Colors
    // type отвечает за "узор" линии
} & Id
