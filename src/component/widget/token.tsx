import { useToken } from "@/lib/hook";
import { getScale } from "@/lib/utils";
import type { tokenType } from "@/model";
import { useMemo, type FC } from "react";
import { Circle, Group } from "react-konva";

export const Token: FC<tokenType> = (item: tokenType) => {
    const {
        clickHandler,
        dragEndHandler,
        dragStartHandler,
        mouseOutHandler,
        mouseOverHandler,
        dragMoveHandler,
        image,
        rectRef,
        _position
    } = useToken(
        item.position,
        item.path
    )
    const scale = useMemo(() => image ? getScale(image.height, image.width) : 0, [item, image])

    return (
        <Group
            id={item.id.toString()}
            ref={rectRef}
            draggable={true}
            {...(_position || item.position)}
            onClick={clickHandler}
            onDragEnd={dragEndHandler}
            onDragStart={dragStartHandler}
            onMouseOut={mouseOutHandler}
            onMouseOver={mouseOverHandler}
            onDragMove={dragMoveHandler}
        >
            <Circle
                fill={'#f1e9d2'}
                radius={image ? (image?.height > image.width ? image.width : image.height) / 2 : 0}
                scale={{ y: scale, x: scale }}
            />
            <Circle
                fillPatternRepeat='no-repeat'
                stroke="#1f1f1f"
                strokeWidth={(image?.width ?? 0) * .05}
                radius={image ? (image?.height > image.width ? image.width : image.height) / 2 : 0}
                fillPatternImage={image}
                fillPatternX={image ? -image?.width / 2 : 0}
                fillPatternY={image ? -image?.height / 2 : 0}
                scale={{ y: scale, x: scale }}
            />
        </Group>
    )
}
