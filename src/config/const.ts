type avalibleColors = "red" | "blue"

const Colors: { [key in avalibleColors]: string } = {
    red: "",
    blue: ""
}

type Colors = (typeof Colors)[keyof typeof Colors]

export { Colors }
