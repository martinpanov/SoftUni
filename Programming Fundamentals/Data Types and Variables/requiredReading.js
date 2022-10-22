function requriedReading (pages, pages1Hour, days) {
    let totalTime = pages / pages1Hour
    let hoursPerDay = totalTime / days
    console.log(hoursPerDay)
}
requriedReading(212,
    20 ,
    2)