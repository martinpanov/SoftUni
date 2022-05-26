function trekkingMania(input) {
    let index = 0
    let groups = Number(input[0])
    let peopleInGroup = Number(input[1]);
    let totalPeople = 0;
    let musalaCount = 0;
    let monblanCount = 0;
    let kilimandjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;
    for (let i = 0; i < groups; i++) {
        index++
        peopleInGroup = Number(input[index])
        totalPeople += peopleInGroup;
        if (peopleInGroup < 6) {
            musalaCount += peopleInGroup
        } else if (peopleInGroup > 5 && peopleInGroup < 13) {
            monblanCount += peopleInGroup
        } else if (peopleInGroup > 12 && peopleInGroup < 26) {
            kilimandjaroCount += peopleInGroup
        } else if (peopleInGroup > 25 && peopleInGroup < 41) {
            k2Count += peopleInGroup
        } else {
            everestCount += peopleInGroup
        }

    }
    let musalaCalc = musalaCount / totalPeople * 100
    let monblanCalc = monblanCount / totalPeople * 100
    let kilimandjaroCalc = kilimandjaroCount / totalPeople * 100
    let k2Calc = k2Count / totalPeople * 100
    let everestCalc = everestCount / totalPeople * 100
    console.log(`${musalaCalc.toFixed(2)}%`)
    console.log(`${monblanCalc.toFixed(2)}%`)
    console.log(`${kilimandjaroCalc.toFixed(2)}%`)
    console.log(`${k2Calc.toFixed(2)}%`)
    console.log(`${everestCalc.toFixed(2)}%`)
}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])