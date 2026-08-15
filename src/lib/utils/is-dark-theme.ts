import { dataThemeAttribute, Themes } from "@/config"

export const isDarkTheme = () => {
    return document.documentElement.getAttribute(dataThemeAttribute) == Themes.dark
}
