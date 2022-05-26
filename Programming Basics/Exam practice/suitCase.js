function suitCase (input) {
    let index = 0
    let capacityTrunk = Number(input[index++])
    let command = input[index++]
    let totalCapacityTrunk = capacityTrunk
    let suitCaseCounter = 0
    while (command !== "End") {
        if (totalCapacityTrunk < 0) {
            console.log(`No more space!`)
            suitCaseCounter--
            console.log(`Statistic: ${suitCaseCounter} suitcases loaded.`)
            break
        }
        let suitCase = Number(command)
        suitCaseCounter++
        if (suitCaseCounter % 3 === 0) {
            suitCase *= 1.1
        }
        totalCapacityTrunk -= suitCase
        command = input[index++]
        
    }
    if (totalCapacityTrunk >= 0) {
        console.log(`Congratulations! All suitcases are loaded!`)
        console.log(`Statistic: ${suitCaseCounter} suitcases loaded.`)
    }
    
}
suitCase(["1200.2",
"260",
"380.5",
"125.6",
"305",
"End"])