function processOddPositions(elements) {
    let newArr = []
    let result = elements
    .filter((numbers, index) => {
        if (index % 2 !== 0) {
            newArr.push(numbers)
        }
    })
    newArr = newArr.map(numbers => numbers * 2).reverse()
    console.log(newArr)
}
processOddPositions([3, 0, 10, 4, 7, 3])