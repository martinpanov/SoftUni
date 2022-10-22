function printNElement(input) {
    let element = Number(input.pop())
    let counter = 0
    let elementsToPrint = ''
    elementsToPrint += `${input[0]} `
    for (let i = 0; i < input.length; i++) {
        if (counter === element) {
            elementsToPrint += `${input[i]} `
            counter = 0
        }
        counter++
    }
    console.log(elementsToPrint)
}
printNElement(['1', '2', '3', '4', '5', '6'])