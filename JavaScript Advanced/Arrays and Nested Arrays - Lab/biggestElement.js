function biggestElement(arr) {
    let biggestNumber = []
    let result = arr.forEach(array => {
        let sortedItems = array.sort((a,b) => b-a).splice(0,1).join("")
        biggestNumber.push(sortedItems)
    })
    biggestNumber = biggestNumber.sort((a,b) => b-a).splice(0,1).join("")
    console.log(biggestNumber)
}
biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]])