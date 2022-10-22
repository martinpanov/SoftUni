function arrayRotation (array, numberRotations) {
    let element
    let elementPush
    while (numberRotations > 0) {
        element = array.shift()
        elementPush = array.push(element)
        numberRotations--
    }
    console.log(array.join(' '))
}
arrayRotation([2, 4, 15, 31], 5)