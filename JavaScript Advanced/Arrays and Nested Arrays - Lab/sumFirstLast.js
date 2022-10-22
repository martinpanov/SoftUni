function sumFirstLast(elements) {
    let firstElement = elements.shift()
    let lastElement = elements.pop()
    console.log(Number(firstElement) + Number(lastElement))
}
sumFirstLast(['20', '30', '40'])