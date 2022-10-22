function timeToWalk(steps, footprint, speed) {
    let distanceInMeters = steps * footprint
    let speedInMetersPerS = speed / 3.6
    let travelTimeInS = distanceInMeters / speedInMetersPerS
    let breakTime = Math.floor(distanceInMeters / 500)

    let travelTimeInMin = Math.floor(travelTimeInS / 60)
    let timeInS = Number((travelTimeInS - (travelTimeInMin * 60)).toFixed(0))
    let timeInH = Math.floor(travelTimeInS / 3600)
    let totalTimeInMin = travelTimeInMin + breakTime
    timeInH += Math.floor(travelTimeInMin / 60)
    travelTimeInMin = travelTimeInMin % 60

    let logTimeH = timeInH < 10 ? `0${timeInH}` : `${timeInH}`
    let logTimeM = totalTimeInMin < 10 ? `0${totalTimeInMin}` : `${totalTimeInMin}`
    let logTimeS = timeInS < 10 ? `0${timeInS}` : `${timeInS}`

    console.log(`${logTimeH}:${logTimeM}:${logTimeS}`)
}
timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)