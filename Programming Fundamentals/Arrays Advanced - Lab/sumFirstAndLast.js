function sumFirstAndLast(arrayOfNumbers) {
    let firstElement = arrayOfNumbers.shift()
    let lastElement = arrayOfNumbers.pop()
    let result = Number(firstElement) + Number(lastElement)
    console.log(result)
}
sumFirstAndLast(['20', '30', '40'])