function worldSwimmingRecord(input) {
    let secondsWr = Number(input[0]);
    let metersWr = Number(input[1]);
    let swimTimeFor1meter = Number(input[2]);
    let ivansTime = metersWr * swimTimeFor1meter
    let metersWrCalc = metersWr / 15; 
    if (metersWr >= 15) {
        ivansTime = Math.floor(metersWrCalc) * 12.5 + ivansTime
    } else {
        ivansTime
    }
    const timeNeeded = Math.abs(ivansTime - secondsWr)
    if (secondsWr > ivansTime){
        console.log(`Yes, he succeeded! The new world record is ${ivansTime.toFixed(2)} seconds.`)
    } else if (secondsWr <= ivansTime) {
        console.log (`No, he failed! He was ${timeNeeded.toFixed(2)} seconds slower.`)
    }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"])