// Using the power of clojure to have a cleaner, more performant and encapsulated code
function retrieveColorColor() {
    const style = getComputedStyle(document.body)

    return (colorName) => {
        if (!colorName) return '' // Nice to have some guards
        return style.getPropertyValue(`--${colorName}`)
    }
}

export const getColor = retrieveColorColor()
