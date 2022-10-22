function meetings(arrayOfStrings) {
    let meeting = {

    }
    for (let el of arrayOfStrings) {
        let splitedArray = el.split(" ")
        let [day, name] = splitedArray
        if (meeting.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            meeting[day] = name
            console.log(`Scheduled for ${day}`)
        }
    }
    for (let keys of Object.keys(meeting)) {
        console.log(`${keys} -> ${meeting[keys]}`)
    }
}
meetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim'])