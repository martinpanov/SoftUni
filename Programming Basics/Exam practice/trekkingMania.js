function trekkingMania (input){
    let index = 0
    let groupsCount = Number(input[index++])
    let peopleInOneGroup = Number(input[index++])
    let musalaCount = 0
    let monblanCount = 0
    let kilimandjaroCount = 0
    let k2Count = 0
    let everestCount = 0
    for (let i = 1; i <= groupsCount; i++) {
        if (peopleInOneGroup <= 5) {
            musalaCount += peopleInOneGroup
        } else if (peopleInOneGroup <= 12) {
            monblanCount += peopleInOneGroup
        } else if (peopleInOneGroup <= 25) {

            kilimandjaroCount += peopleInOneGroup
        } else if (peopleInOneGroup <= 40) {
            k2Count += peopleInOneGroup
        } else {
            everestCount += peopleInOneGroup
        }
        peopleInOneGroup = Number(input[index++])
    }
    let totalPeople = musalaCount + monblanCount + kilimandjaroCount + k2Count + everestCount
    let musalaPerc = musalaCount / totalPeople * 100
    let monblanPerc = monblanCount / totalPeople * 100
    let kilimandjaroPerc = kilimandjaroCount / totalPeople * 100
    let k2Perc = k2Count / totalPeople * 100
    let everestPerc = everestCount / totalPeople * 100

    console.log(`${musalaPerc.toFixed(2)}%`)
    console.log(`${monblanPerc.toFixed(2)}%`)
    console.log(`${kilimandjaroPerc.toFixed(2)}%`)
    console.log(`${k2Perc.toFixed(2)}%`)
    console.log(`${everestPerc.toFixed(2)}%`)

}
trekkingMania(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])