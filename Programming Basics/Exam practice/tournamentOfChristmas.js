function tournamentOfChristmas(input) {
    let index = 0
    let tournamentDays = Number(input[index++])
    let command = input[index]
    let moneyCollectedAfterDay = 0
    let totalMoneyCollected = 0
    let winCounter = 0
    let loseCounter = 0
    let tempWinCounter = 0
    let tempLoseCounter = 0
    for (let i = 1; i <= tournamentDays; i++) {
        command = input[index++]
        while (command !== "Finish") {
            command = input[index++]
            let result = command
            if (result === "win") {
                moneyCollectedAfterDay += 20
                winCounter++
                tempWinCounter++
            } else {
                moneyCollectedAfterDay += 0
                loseCounter++
                tempLoseCounter++
            }
            command = input[index++]
        }
        if (tempWinCounter > tempLoseCounter) {
            totalMoneyCollected += moneyCollectedAfterDay * 1.1
            moneyCollectedAfterDay = 0
        } else {
            totalMoneyCollected += moneyCollectedAfterDay
            moneyCollectedAfterDay = 0
        }
        tempWinCounter = 0
        tempLoseCounter = 0
    }
    if (winCounter > loseCounter) {
        totalMoneyCollected *= 1.2
        console.log(`You won the tournament! Total raised money: ${totalMoneyCollected.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoneyCollected.toFixed(2)}`)
    }
    
}
tournamentOfChristmas(["3",
"darts",
"lose",
"handball",
"lose",
"judo",
"win",
"Finish",
"snooker",
"lose",
"swimming",
"lose",
"squash",
"lose",
"table tennis",
"win",
"Finish",
"volleyball",
"win",
"basketball",
"win",
"Finish"])