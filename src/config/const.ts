import type { ToastOptions } from 'react-toastify';


type availableColors = "red" | "blue"
export const Colors: { [key in availableColors]: string } = {
    red: "",
    blue: ""
}
export type Colors = (typeof Colors)[keyof typeof Colors]

export const Themes = {
    dark: "dark",
    light: "light"
} as const
export type _Themes = (typeof Themes)[keyof typeof Themes]

export const toastConfig: ToastOptions = {
    hideProgressBar: true
}

export const dataThemeAttribute = "data-theme"

export const expires = 1 * 365 * 24 * 60 * 60
