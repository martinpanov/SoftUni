function roadRadar(speed, type) {
    const motorwaySpeed = 130
    const interstateSpeed = 90
    const citySpeed = 50
    const residentialAreaSpeed = 20
    const speeding = "speeding"
    const excessiveSpeeding = "excessive speeding"
    const recklessDriving = "reckless driving"
    let difference = 0

    switch (type) {
        case "motorway":
            if (speed > motorwaySpeed) {
                difference = Math.abs(speed - motorwaySpeed)
                if (difference <= 20) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeed} - ${speeding}`)
                } else if (difference <= 40) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeed} - ${excessiveSpeeding}`)
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorwaySpeed} - ${recklessDriving}`)
                }
            } else {
                console.log(`Driving ${speed} km/h in a ${motorwaySpeed} zone`)
            }
        break
        case "city":
            if (speed > citySpeed) {
                difference = Math.abs(speed - citySpeed)
                if (difference <= 20) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${citySpeed} - ${speeding}`)
                } else if (difference <= 40) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${citySpeed} - ${excessiveSpeeding}`)
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${citySpeed} - ${recklessDriving}`)
                }
            } else {
                console.log(`Driving ${speed} km/h in a ${citySpeed} zone`)
            }
        break
        case "interstate":
            if (speed > interstateSpeed) {
                difference = Math.abs(speed - interstateSpeed)
                if (difference <= 20) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateSpeed} - ${speeding}`)
                } else if (difference <= 40) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateSpeed} - ${excessiveSpeeding}`)
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstateSpeed} - ${recklessDriving}`)
                }
            } else {
                console.log(`Driving ${speed} km/h in a ${interstateSpeed} zone`)
            }
        break
        case "residential":
            if (speed > residentialAreaSpeed) {
                difference = Math.abs(speed - residentialAreaSpeed)
                if (difference <= 20) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialAreaSpeed} - ${speeding}`)
                } else if (difference <= 40) {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialAreaSpeed} - ${excessiveSpeeding}`)
                } else {
                    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residentialAreaSpeed} - ${recklessDriving}`)
                }
            } else {
                console.log(`Driving ${speed} km/h in a ${residentialAreaSpeed} zone`)
            }
        break
    }
}
roadRadar(21, 'residential')