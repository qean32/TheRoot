import { useStage, useWindowSize } from "@/lib/hook";
import { voidFunction } from "@/lib/utils";
import type { FC } from "react";
import { Stage, Layer } from "react-konva"

export const Field: FC<{}> = () => {
    const { handleWheel, stage: { x, y, scale } } = useStage()
    const { innerHeight, innerWidth } = useWindowSize()

    return (
        <Stage
            width={innerWidth}
            height={innerHeight}
            onWheel={handleWheel}
            scaleX={scale}
            scaleY={scale}
            x={x}
            y={y}
            draggable

            onDragMove={voidFunction}
            onDragEnd={voidFunction}
            onDragStart={voidFunction}
        >
            <Layer>
            </Layer>
        </Stage>
    )
}
