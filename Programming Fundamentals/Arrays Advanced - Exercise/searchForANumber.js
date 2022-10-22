function searchForANumber(arrOne, arrTwo) {
    let firstElementsTaken = arrOne.splice(0, arrTwo[0])
    let elementsDeleted = firstElementsTaken.splice(0, arrTwo[1])
    let counter = 0
    for (let el of firstElementsTaken) {
        if (el === arrTwo[2]) {
            counter++
        }
    }
    return `Number ${arrTwo[2]} occurs ${counter} times.`
}
console.log(searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3]))