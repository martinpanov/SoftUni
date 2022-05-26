function sumSeconds(input) {
    let timefirst = Number(input[0]);
    let timeSecond = Number(input[1]);
    let timeThird = Number(input[2]);
    let totalTime = timefirst + timeSecond + timeThird;
    let totalTimeInMinutes = Math.floor(totalTime / 60);
    let calcSeconds = totalTime % 60;
    if (calcSeconds < 10) {
        console.log(`${totalTimeInMinutes}:0${calcSeconds}`)
    } else {
        console.log(`${totalTimeInMinutes}:${calcSeconds}`)
    }
}
sumSeconds(["14", "12", "10"]);