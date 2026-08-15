import { useEffect, useState } from "react";
import { getWindowSize } from "@/lib/utils";
import { useDebounce } from "@/lib/hook";

export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const debounce = useDebounce(windowSize)


    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return debounce
}
