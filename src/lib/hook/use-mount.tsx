import { useEffect } from "react"
import { useBoolean } from "./use-boolean"

const DEFAULT_DALEY = 300

export const useMount = (view: boolean, daley: number = DEFAULT_DALEY) => {
    const { boolean: mount, off, on } = useBoolean(false)

    useEffect(() => {
        if (view && !mount) {
            on()
        } else if (!view && mount) {
            setTimeout(off, daley)
        }
    }, [view])

    return mount
}
