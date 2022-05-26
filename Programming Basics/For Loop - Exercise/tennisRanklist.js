function tennisRanklist(input) {
    let index = 0
    let tournamentCount = Number(input[index++]);
    let startingPoints = Number(input[index++]);
    let tournamentRank = input[index++];
    let finalPoints = startingPoints;
    let winPoints = 0;
    let tournamentsWon = 0;

    for (let i = 0; i < tournamentCount; i++) {
        switch (tournamentRank) {
            case "F":
                finalPoints += 1200;
                winPoints += 1200;
            break;
            case "W":
                tournamentsWon++
                finalPoints += 2000;
                winPoints += 2000;
            break;
            case "SF":
                finalPoints += 720;
                winPoints += 720;
            break;
        }
        tournamentRank = input[index++]
    }
    let tournamentsWonCalc = (tournamentsWon / tournamentCount) * 100
    let avgPoints = winPoints / tournamentCount
    console.log(`Final points: ${finalPoints}`)
    console.log(`Average points: ${Math.floor(avgPoints)}`)
    console.log(`${tournamentsWonCalc.toFixed(2)}%`)

}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])