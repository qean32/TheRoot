import { dataThemeAttribute, Themes, type ThemesType } from "@/config"
import { setTheme } from "./set-theme"
import Cookies from "js-cookie"

export const initTheme = () => {
    // @ts-ignore
    const theme: ThemesType = Cookies.get(dataThemeAttribute)

    if (!theme) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme(Themes.dark)
        }

        return
    }

    setTheme(theme)
}
