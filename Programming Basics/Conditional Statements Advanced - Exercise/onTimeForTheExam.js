function onTimeForTheExam(input) {
    const hourOfExam = Number(input[0]);
    const minuteOfExam = Number(input[1]);
    const hourOfArrival = Number(input[2]);
    const minuteOfArrival = Number(input[3]);
    let hoursToMinutesExam = hourOfExam * 60 + minuteOfExam;
    let hoursToMinutesArrival = hourOfArrival * 60 + minuteOfArrival;
    let calc = Math.abs(hoursToMinutesExam - hoursToMinutesArrival);
    let hourDiff = Math.floor(calc / 60);
    let minDiff = calc % 60;

    if (minDiff === 0 || (minDiff < 10 && hourDiff > 0)) {
       minDiff = `0${minDiff}`
    }
    if (hoursToMinutesArrival > hoursToMinutesExam) {
        console.log("Late")
        if (hoursToMinutesArrival > hoursToMinutesExam && calc < 60) {
            console.log(`${minDiff} minutes after the start`)
        } else if (hoursToMinutesArrival > hoursToMinutesExam && calc >= 60) {
            console.log(`${hourDiff}:${minDiff} hours after the start`)
        }
    } else if (hoursToMinutesExam > hoursToMinutesArrival && calc > 30) {
        console.log("Early")
        if (calc > 30 && calc < 60) {
            console.log(`${minDiff} minutes before the start`)
        } else {
            console.log(`${hourDiff}:${minDiff} hours before the start`)
        }
    } else if (hoursToMinutesArrival === hoursToMinutesExam) {
        console.log("On time")
    } else if (calc <= 30) {
        console.log("On time")
        console.log(`${minDiff} minutes before the start`)
    }
}
onTimeForTheExam(["16",
"00",
"15",
"00"])