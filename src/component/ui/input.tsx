import { cn } from "@/lib/utils";
import type { ComponentProps, FC } from "react";

type Props = {
} & ComponentProps<"input">

export const Input: FC<Props> = (props: Props) => {
    return (
        <input
            className={cn(
                "w-full p-2 px-4 bg-primary-dark rounded-md text-white",
                "relative isolate",
                "transition-all duration-700 ease-in-out",
                "before:absolute before:-inset-2 before:-z-10",
                "before:bg-purple-500/30 before:blur-3xl",
                "before:opacity-0",
                "before:transition-opacity before:duration-700",
                "before:ease-in-out",
                "before:scale-75",
                "before:transition-all before:duration-700",
                "hover:before:opacity-100",
                "hover:before:scale-110",
                "not-placeholder-shown:before:opacity-100",
                "not-placeholder-shown:before:scale-110",
                "hover:shadow-[0_0_60px_rgba(139,92,246,0.4)]",
                "not-placeholder-shown:shadow-[0_0_60px_rgba(139,92,246,0.4)]",
                "transition-shadow duration-700",
                "focus:outline-none",
                "placeholder:text-gray-400",
                "transition-colors duration-700"
            )}
            placeholder="Введите текст..."
            {...props}
        />
    )
}
