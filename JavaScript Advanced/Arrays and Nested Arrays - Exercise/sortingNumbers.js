function sortingNumbers(numbers) {
    let res = []
    let copyOfNumbers = numbers.slice()
    let smallestNumbers = copyOfNumbers.sort((a,b) => a-b)
    let biggestNumbers = numbers.sort((a,b) => b-a)
    for (let i = 0; i < numbers.length / 2; i++) {
        res.push(smallestNumbers[i])
        res.push(biggestNumbers[i])
    }
    if (numbers.length % 2 !== 0) {
        res.pop()
    }
    return res
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18]))