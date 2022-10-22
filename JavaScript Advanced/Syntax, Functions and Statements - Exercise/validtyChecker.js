function validityChecker(x1, y1, x2, y2) {
    let zeroEquasitionX1Y1 = Math.pow((0, x1), 2)
    let zeroEquasitionX1Y1PartoTwo = Math.pow((0 - y1), 2)
    let equasitionZeroAndX = Math.sqrt(zeroEquasitionX1Y1 + zeroEquasitionX1Y1PartoTwo)

    let zeroEquasitionX2Y2 = Math.pow((0, x2), 2)
    let zeroEquasitionX2Y2PartTwo = Math.pow((0 - y2), 2)
    let equasitionZeroAndY = Math.sqrt(zeroEquasitionX2Y2 + zeroEquasitionX2Y2PartTwo)

    let xEquasition = Math.pow((x2 - x1), 2)
    let yEquasition = Math.pow((y2 - y1), 2)
    let equasitionXAndY = Math.sqrt(xEquasition + yEquasition)
    
    if (Number.isInteger(equasitionZeroAndX)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(equasitionZeroAndY)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    if (Number.isInteger(equasitionXAndY)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
}
validityChecker(2, 1, 1, 1)