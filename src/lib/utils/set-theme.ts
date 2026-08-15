import Cookies from "js-cookie"
import { dataThemeAttribute, expires, type ThemesType } from "@/config"

export const setTheme = (theme: ThemesType) => {
    Cookies.set(dataThemeAttribute, theme, { expires })
    document.documentElement.setAttribute(dataThemeAttribute, theme)
}
