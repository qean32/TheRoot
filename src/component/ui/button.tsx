import { cn } from "@/lib/utils"
import type { ComponentProps, FC, ReactNode } from "react"

type Props = {
    children: ReactNode
} & ComponentProps<"button">

export const Button: FC<Props> = (props: Props) => {
    return (
        <button className={cn(
            "cursor-pointer p-1.5 px-4 bg-primary-dark rounded-md",
            "relative isolate",
            "transition-all duration-700 ease-in-out",
            "before:absolute before:-inset-2 before:-z-10",
            "before:bg-purple-500/30 before:blur-3xl",
            "before:opacity-0 hover:before:opacity-100",
            "before:transition-opacity before:duration-700",
            "before:scale-75 hover:before:scale-110",
            "before:transition-all before:duration-700",
            "hover:shadow-[0_0_60px_rgba(139,92,246,0.4)]",
            "hover:shadow-indigo-500/30",
            "transition-shadow duration-500",

            "border border-purple-500/20",
            "hover:border-purple-500/50",
            "transition-colors duration-700",
        )}
            {...props}
        >
            <span className="relative z-10">{props.children}</span>
        </button>
    )
}
