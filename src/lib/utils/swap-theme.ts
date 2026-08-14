import { dataThemeAttribute, Themes, type _Themes } from "@/config"
import { setTheme } from "./"

export const swapTheme = () => {
    setTheme(document.documentElement.getAttribute(dataThemeAttribute) == Themes.light
        ? Themes.dark : Themes.light)
}
