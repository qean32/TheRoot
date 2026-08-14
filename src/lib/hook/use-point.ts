import { useStore } from "./use-store"

export const useToken = () => {
    const { pointStore } = useStore()

    return pointStore
}
