import { useEffect, useRef } from "react";

export const useEvent = (
    target: EventTarget | null,
    eventName: string,
    handler: (event: Event) => void
) => {
    const handlerRef = useRef(handler);

    useEffect(() => {
        handlerRef.current = handler;
    }, [handler]);

    useEffect(() => {
        if (!target) return;

        const listener = (event: Event) => {
            handlerRef.current(event);
        };

        target.addEventListener(eventName, listener);

        return () => {
            target.removeEventListener(eventName, listener);
        };
    }, [target, eventName]);
};
