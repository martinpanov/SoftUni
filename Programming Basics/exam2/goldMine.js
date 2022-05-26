function goldMine(input) {
    let index = 0
    let locations = Number(input[index++])
    let totalGoldAcquired = 0;
    let avgDobiv = 0
    for (let i = 0; i < locations; i++) {
        let expectedDobiv = Number(input[index++])
        let daysKopane = Number(input[index++])
        for (let b = 0; b < daysKopane; b++) {
            let acquiredGold = Number(input[index++])
            totalGoldAcquired += acquiredGold
        }
        avgDobiv = totalGoldAcquired / daysKopane
        if (expectedDobiv <= avgDobiv) {
            console.log(`Good job! Average gold per day: ${avgDobiv.toFixed(2)}.`)
            totalGoldAcquired = 0
            avgDobiv = 0
            difference = 0
        } else {
            let difference = Math.abs(avgDobiv - expectedDobiv)
            console.log(`You need ${difference.toFixed(2)} gold.`)
            totalGoldAcquired = 0
            avgDobiv = 0
            difference = 0
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