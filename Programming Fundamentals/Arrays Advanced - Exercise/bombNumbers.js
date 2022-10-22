function bombNumbers(numbers, specialNumbers) {
    let copyOfArray = numbers.slice()
    let power = specialNumbers[1]
    let bombNumber = specialNumbers[0]
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        if (copyOfArray[i] === bombNumber) {
            let indexOf = Math.max(0, copyOfArray.indexOf(bombNumber) - power)
            copyOfArray.splice(indexOf, power * 2 + 1)
            //copyOfArray.splice(copyOfArray.indexOf(bombNumber), power + 1)
            i = 0
        }
    }
    for (let k = 0; k < copyOfArray.length; k++) {
        sum += copyOfArray[k]
    }
    console.log(sum)
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9],
    [4, 2])