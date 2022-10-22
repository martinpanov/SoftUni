function attachEventsListeners() {
    let daysButton = document.getElementById("daysBtn")
    let daysInput = document.getElementById("days")

    let hoursButton = document.getElementById("hoursBtn")
    let hoursInput = document.getElementById("hours")

    let minutesButton = document.getElementById("minutesBtn")
    let minutesInput = document.getElementById("minutes")

    let secondsButton = document.getElementById("secondsBtn")
    let secondsInput = document.getElementById("seconds")

    daysButton.addEventListener("click", function (event) {
        let calcHours = Number(daysInput.value) * 24
        let calcMinutes = Number(daysInput.value) * 24 * 60
        let calcSeconds = Number(daysInput.value) * 24 * 60 * 60 
        hoursInput.value = calcHours
        minutesInput.value = calcMinutes
        secondsInput.value = calcSeconds
        debugger
    })
    hoursButton.addEventListener("click", function (event) {
        let calcDays = Number(hoursInput.value) / 24
        let calcMinutes = Number(hoursInput.value) * 60
        let calcSeconds = Number(hoursInput.value) * 60 * 60 
        daysInput.value = calcDays
        minutesInput.value = calcMinutes
        secondsInput.value = calcSeconds
    }) 
    
    minutesButton.addEventListener("click", function (event) {
        let calcDays = Number(minutesInput.value) / 24 / 60
        let calcHours = Number(minutesInput.value) / 60
        let calcSeconds = Number(minutesInput.value) * 60 
        daysInput.value = calcDays
        hoursInput.value = calcHours
        secondsInput.value = calcSeconds
    })

    secondsButton.addEventListener("click", function(event) {
        let calcDays = Number(secondsInput.value) / 24 / 60 / 60
        let calcHours = Number(secondsInput.value) / 60 / 60
        let calcMinutes = Number(secondsInput.value) / 60 
        daysInput.value = calcDays
        hoursInput.value = calcHours
        minutesInput.value = calcMinutes
    })
}