function previousDay(year, month, date) {
    let newDate = new Date(year, month + 1, date - 1)
    console.log(`${newDate.getFullYear()}-${newDate.getMonth() - 1}-${newDate.getDate()}`)
}
previousDay(2016, 9, 30)