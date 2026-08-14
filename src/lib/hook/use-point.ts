import { useStore } from "./use-store"

export const usePoint = () => {
    const { pointStore } = useStore()

    return pointStore
}
