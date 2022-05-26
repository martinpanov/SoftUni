function timePlus15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    minutes += 15
    if (minutes >= 60) {
        minutes -= 60;
        hours += 1;
    } 
    if (hours >= 24) {
        hours = 0;
    }
    if (minutes > 9) {
        console.log(`${hours}:${minutes}`)
    } else {
        console.log(`${hours}:0${minutes}`)
    }
}
timePlus15Minutes(["1","46"])