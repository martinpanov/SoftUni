function biggerHalf(elements) {
    elements.sort((a,b) => a-b)
    return elements.slice(elements.length / 2)
}
console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]))