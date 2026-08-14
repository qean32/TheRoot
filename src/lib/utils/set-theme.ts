import Cookies from "js-cookie"
import { dataThemeAttribute, expires, type _Themes } from "@/config"

export const setTheme = (theme: _Themes) => {
    Cookies.set(dataThemeAttribute, theme, { expires })
    document.documentElement.setAttribute(dataThemeAttribute, theme)
}
