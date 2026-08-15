import { Themes, type ThemesType } from "@/config"
import { isDarkTheme, setTheme } from "./"

export const swapTheme = () => {
    setTheme(isDarkTheme()
        ? Themes.light : Themes.dark)
}
