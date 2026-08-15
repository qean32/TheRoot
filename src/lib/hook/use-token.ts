import useImage from "use-image";
import { type coordinateType } from "@/model";
import { useMemo, useRef } from "react";

export const useToken = (position: coordinateType, path: string) => {
    const _position = useMemo(() => position, [])
    const [image] = useImage(path);

    const rectRef = useRef<null | HTMLCanvasElement | any>(null);

    const mouseOverHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        e.target.getStage().container().style.cursor = 'pointer';
    };

    const mouseOutHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        e.target.getStage().container().style.cursor = 'default';
    };

    const dragStartHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        e.target.getStage().container().style.cursor = 'move';
    };

    const dragEndHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        const payload = {
            id: e.currentTarget.attrs.id,
            position: {
                y: e.target.attrs.y,
                x: e.target.attrs.x,
            },
        }
        console.log(payload)
        e.target.getStage().container().style.cursor = 'pointer';
    };

    const dragMoveHandler = () => {
    };

    const clickHandler = (e: any | React.MouseEvent<HTMLCanvasElement>) => {
        console.log(e.currentTarget.attrs.id)
    }

    return { mouseOutHandler, mouseOverHandler, dragMoveHandler, clickHandler, dragEndHandler, dragStartHandler, image, rectRef, _position }
}
