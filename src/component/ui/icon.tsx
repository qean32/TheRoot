import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

interface Props extends ComponentProps<"img"> {
    size?: keyof typeof SIZES;
    name: string;
    className?: string;
}

const SIZES = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8",
    "2xl": "w-10 h-10",
    "3xl": "w-12 h-12",
} as const;

export const Icon = ({
    size = "md",
    name,
    className,
    ...props
}: Props) => {

    return (
        <img {...props} color="red" className={cn("", SIZES[size])} src="http://localhost:5173/icon/game.svg" />
    );
};
