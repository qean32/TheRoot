import { useState, useCallback } from "react";

interface UseStageOptions {
    minScale?: number;
    maxScale?: number;
    zoomSpeed?: number;
    limitX?: number;
    limitY?: number;
}

export const useStage = (options: UseStageOptions = {}) => {
    const {
        minScale = 0.25,
        maxScale = 1.1,
        zoomSpeed = 1.1,
        limitX = 2000,
        limitY = 2000,
    } = options;

    const [stage, setStage] = useState({
        scale: .5,
        x: 0,
        y: 0,
    });

    const clampPosition = useCallback((x: number, y: number) => {
        return {
            x: Math.min(Math.max(x, -limitX), limitX),
            y: Math.min(Math.max(y, -limitY), limitY),
        };
    }, [limitX, limitY]);

    const handleWheel = useCallback((e: any) => {
        e.evt.preventDefault();

        const stageNode = e.target.getStage();
        const oldScale = stageNode.scaleX();
        const pointerPosition = stageNode.getPointerPosition();

        const mousePointTo = {
            x: pointerPosition.x / oldScale - stageNode.x() / oldScale,
            y: pointerPosition.y / oldScale - stageNode.y() / oldScale,
        };

        const newScale = e.evt.deltaY < 0 ? oldScale * zoomSpeed : oldScale / zoomSpeed;

        if (newScale > minScale && newScale < maxScale) {
            let newX = (pointerPosition.x / newScale - mousePointTo.x) * newScale;
            let newY = (pointerPosition.y / newScale - mousePointTo.y) * newScale;

            const clamped = clampPosition(newX, newY);

            setStage({
                scale: newScale,
                x: clamped.x,
                y: clamped.y,
            });
        }
    }, [minScale, maxScale, zoomSpeed, clampPosition]);

    const handleDragMove = useCallback((e: any) => {
        const stageNode = e.target.getStage();
        const newX = stageNode.x();
        const newY = stageNode.y();

        const clamped = clampPosition(newX, newY);

        if (clamped.x !== newX || clamped.y !== newY) {
            stageNode.position({ x: clamped.x, y: clamped.y });
            stageNode.batchDraw();
        }

        setStage({
            scale: stageNode.scaleX(),
            x: clamped.x,
            y: clamped.y,
        });
    }, [clampPosition]);

    return { stage, handleWheel, handleDragMove };
};
