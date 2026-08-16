export const getScale = (height: number, width: number) => {
    return (70 / ((height > width ? width : height) / 2))
}
