function lunchBreak(input) {
    let nameOfSerial = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);
    let timeForLunch = breakTime / 8;
    let timeForChill = breakTime / 4;
    let totalTime = timeForChill + timeForLunch + episodeTime
    let difference = Math.abs(breakTime - totalTime)
    if (totalTime <= breakTime) {
        console.log(`You have enough time to watch ${nameOfSerial} and left with ${Math.ceil(difference)} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${nameOfSerial}, you need ${Math.ceil(difference)} more minutes.`)
    }
}
lunchBreak(["Game of Thrones", "48", "60"])