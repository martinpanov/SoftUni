function goldMine(input) {
    let index = 0
    let location = Number(input[index++])
    let acquiredGold = 0
    let counter = 0
    let avgGold = 0
    while (location > 0) {
        let expectedGold = Number(input[index++])
        let miningDays = Number(input[index++])
        while (miningDays > 0) {
            acquiredGold = acquiredGold + Number(input[index++])
            miningDays -= 1
            counter += 1
        }
        if (miningDays == 0) {
            avgGold = acquiredGold / counter
            if (avgGold >= expectedGold) {
                console.log(`Good job! Average gold per day: ${avgGold.toFixed(2)}.`)
                acquiredGold = 0
                avgGold = 0
                counter = 0
                location -= 1
            } else {
                avgGold = expectedGold - avgGold
                console.log(`You need ${avgGold.toFixed(2)} gold.`)
                acquiredGold = 0
                avgGold = 0
                counter = 0
                location -= 1
            }
        }
    }
}
goldMine(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])