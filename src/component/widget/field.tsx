import { useStage, useWindowSize } from "@/lib/hook";
import { createPattern, voidFunction } from "@/lib/utils";
import type { FC } from "react";
import { Stage, Layer, Rect } from "react-konva"
import { Token } from "./token";


export const Field: FC<{}> = () => {
    const { handleWheel, stage: { x, y, scale }, handleDragMove } = useStage()
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

            onDragMove={handleDragMove}
            onDragEnd={voidFunction}
            onDragStart={voidFunction}
        >
            <Layer>
                <Rect
                    width={100000}
                    height={100000}
                    x={-100000 / 2}
                    y={-100000 / 2}
                    // @ts-ignore
                    fillPatternImage={createPattern()}
                    fillPatternRepeat="repeat"
                />

                <Token {...{ description: "", id: 1, name: "zxc", path: "https://avatars.mds.yandex.net/i?id=654e1bade7fd539527a7dfbce8921f68_l-5441329-images-thumbs&n=13", position: { x: 0, y: 0 }, source: "" }} />
            </Layer>
        </Stage>
    )
}
