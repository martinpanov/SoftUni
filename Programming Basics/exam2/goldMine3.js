function goldMine(input) {
    let index = 0
    let locations = Number(input[index++])
    let expectedDobiv = Number(input[index++])
    let daysKopane = Number(input[index++])
    let acquiredGold = Number(input[index++])
    let totalGoldAcquired = 0;
    let avgDobiv = 0
    for (let i = 0; i < locations; i++) {
        for (let b = 0; b < daysKopane; b++) {
            totalGoldAcquired += acquiredGold
            acquiredGold = Number(input[index++])
        }
        avgDobiv = totalGoldAcquired / daysKopane
        if (expectedDobiv <= avgDobiv) {
            avgDobiv = totalGoldAcquired / daysKopane
            console.log(`Good job! Average gold per day: ${avgDobiv.toFixed(2)}.`)
            totalGoldAcquired = 0
        } else {
            let difference = Math.abs(avgDobiv - expectedDobiv)
            console.log(`You need ${difference.toFixed(2)} gold.`)
            totalGoldAcquired = 0
        }
        index--
        expectedDobiv = Number(input[index++])
        daysKopane = Number(input[index++])
        acquiredGold = Number(input[index++])
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