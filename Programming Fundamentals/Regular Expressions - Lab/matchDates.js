function matchDates(dates) {
    let joinedDates = dates.join(", ")
    let regex = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z]{1}[a-z]{2})\2(?<year>[0-9]{4})\b/g
    let validDate = regex.exec(joinedDates)
    while(validDate !== null) {
        console.log(`Day: ${validDate.groups['day']}, Month: ${validDate.groups['month']}, Year: ${validDate.groups['year']}`)
        validDate = regex.exec(joinedDates)
    }
}
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016'])