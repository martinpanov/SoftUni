function mountainRun (input) {
    let recordInSecs = Number(input[0])
    let distance = Number(input[1])
    let timeItTakesToClimb1m = Number(input[2])


    let totalSec = distance * timeItTakesToClimb1m

    let calc50m = Math.floor(distance / 50)

    let realCalc50m = calc50m * 30

    let totalTime = totalSec + realCalc50m

    let diff = Math.abs(recordInSecs - totalTime)

    if (recordInSecs <= totalTime) {
        console.log(`No! He was ${diff.toFixed(2)} seconds slower.`)
    } else {

        console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`)
    }
}
mountainRun(["1377",
"389",
"3"])