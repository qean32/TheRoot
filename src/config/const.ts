import type { ToastOptions } from 'react-toastify';

export const Colors = {
    red: "red",
    blue: "blue"
} as const
export type ColorsType = (typeof Colors)[keyof typeof Colors]

export const Themes = {
    dark: "dark",
    light: "light"
} as const
export type ThemesType = (typeof Themes)[keyof typeof Themes]

export const toastConfig: ToastOptions = {
    hideProgressBar: true
}

export const title = {
    MAIN: "Главная"
} as const

export const dataThemeAttribute = "data-theme"

export const expires = 1 * 365 * 24 * 60 * 60
