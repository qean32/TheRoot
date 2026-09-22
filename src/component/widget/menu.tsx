import { Portal } from "../master/portal";
import { cn } from "@/lib/utils";
import { useDraggable } from "@/lib/hook";
import type { FC } from "react";
import { MenuItem } from "../ui";

import Logo from "./game.svg?url";

interface Props {
}

export const Menu: FC<Props> = ({ }) => {
    const { innerHeight, innerWidth } = window

    const {
        position,
        isDragging,
        dragRef,
        handleMouseDown,
        handleMouseLeave,
    } = useDraggable<HTMLDivElement>({
        initialPosition: { left: 20, top: 20 },
        bounds: {
            maxLeft: innerWidth * 0.9,
            maxTop: innerHeight - 100,
            minLeft: 0,
            minTop: 0
        }
    });

    return (
        <Portal>
            <div
                ref={dragRef}
                className={cn(
                    'absolute z-50 bg-primary rounded-sm',
                    'outline-bg-light',
                    'w-50 pt-6 overflow-scroll',
                    isDragging && 'cursor-move shadow-2xl scale-[1.02]',
                    'select-none border border-primary',
                    'outline-primary-dark outline'
                )}
                style={{
                    left: position.left,
                    top: position.top,
                    transition: isDragging ? 'none' : 'left 0.15s ease, top 0.15s ease',
                }}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
            >
                <div className="absolute top-1 left-0 right-0 h-4 flex justify-center items-center pointer-events-none">
                    <div className="w-8 h-1 bg-primary-dark rounded-full opacity-50" />
                </div>
                <MenuItem><p>Персонажи</p></MenuItem>
                <MenuItem><p>Персонажи</p></MenuItem>
                <MenuItem><p>Персонажи</p></MenuItem>
                <MenuItem><p>Персонажи</p></MenuItem>
            </div>
        </Portal>
    );
};
