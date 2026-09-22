// hooks/useDrag.ts
import { useRef, useState, useCallback } from "react";
import type { positionType } from "@/model";
import { useBoolean } from "./use-boolean";
import { useEvent } from "./use-event";

interface Props {
    initialPosition?: positionType;
    bounds?: {
        minLeft?: number;
        minTop?: number;
        maxLeft?: number;
        maxTop?: number;
    };
}

export const useDraggable = <T extends HTMLElement = HTMLElement>(
    options: Props = {}
) => {
    const { initialPosition = { left: 0, top: 0 }, bounds } = options;

    const ref = useRef<T | null>(null);
    const [position, setPosition] = useState<positionType>(initialPosition);
    const { boolean: isDragging, on: onDrag, off: offDrag } = useBoolean(false);
    const dragStart = useRef<positionType>({ left: 0, top: 0 });
    const startPos = useRef<positionType>(initialPosition);

    const clampPosition = useCallback(
        (left: number, top: number) => {
            if (!bounds) return { left, top };

            const {
                minLeft = 0,
                minTop = 0,
                maxLeft = window.innerWidth,
                maxTop = window.innerHeight,
            } = bounds;

            return {
                left: Math.min(Math.max(left, minLeft), maxLeft),
                top: Math.min(Math.max(top, minTop), maxTop),
            };
        },
        [bounds]
    );

    const handleMouseDown = useCallback(
        (e: React.MouseEvent<HTMLElement>) => {
            if (e.button !== 0) return;

            const target = e.target as HTMLElement;
            if (target.closest("button, input, select, textarea, a, [data-no-drag]")) return;

            onDrag();
            dragStart.current = { left: e.clientX, top: e.clientY };
            startPos.current = { ...position };

            e.preventDefault();
        },
        [position, onDrag]
    );

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!isDragging) return;

            const dx = e.clientX - dragStart.current.left;
            const dy = e.clientY - dragStart.current.top;

            let newLeft = startPos.current.left + dx;
            let newTop = startPos.current.top + dy;

            const clamped = clampPosition(newLeft, newTop);
            newLeft = clamped.left;
            newTop = clamped.top;

            setPosition({ left: newLeft, top: newTop });

            e.preventDefault();
        },
        [isDragging, clampPosition]
    );

    const handleMouseUp = useCallback(() => {
        if (isDragging) {
            offDrag();
            if (ref.current) {
                ref.current.style.cursor = "";
                ref.current.style.userSelect = "";
            }
        }
    }, [isDragging, offDrag]);

    const handleMouseLeave = useCallback(() => {
        if (isDragging) {
            offDrag();
            if (ref.current) {
                ref.current.style.cursor = "";
                ref.current.style.userSelect = "";
            }
        }
    }, [isDragging, offDrag]);

    // @ts-ignore
    useEvent(document, "mousemove", handleMouseMove);
    useEvent(document, "mouseup", handleMouseUp);

    return {
        position,
        isDragging,
        handleMouseDown,
        handleMouseLeave,
        dragRef: ref,
    };
};
