import type { childrenProps } from "@/model";
import type { FC } from "react";

export const MenuItem: FC<childrenProps> = ({ children }: childrenProps) => {
    return <div className="px-5 text-lg p-2 hover:bg-primary-dark cursor-pointer flex gap-2 items-center">{children}</div>
}
