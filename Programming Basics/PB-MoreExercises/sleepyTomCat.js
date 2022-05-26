function sleepyTomCat(input) {
    let restDay = Number(input[0])
    const workPlay = 63
    const restPlay = 127
    const norm = 30000
    let workDaysCalc = 365 - restDay
    let playGameMin = workDaysCalc * workPlay + restDay * restPlay
    let totalTimeCalc = Math.abs(norm - playGameMin)
    let hours = Math.floor(totalTimeCalc / 60)
    let min = totalTimeCalc % 60
    if (norm < playGameMin) {
        console.log("Tom will run away")
        console.log(`${hours} hours and ${min} minutes more for play`)
    } else {
        console.log("Tom sleeps well")
        console.log(`${hours} hours and ${min} minutes less for play`)
    }
}
sleepyTomCat(["20"])