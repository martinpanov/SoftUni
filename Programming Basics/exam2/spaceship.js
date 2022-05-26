function spaceShip(input) {
    let width = Number(input[0])
    let length = Number(input[1])
    let height = Number(input[2])
    let avgHeightAstranauts = Number(input[3])

    let sizeRocket = width * length * height
    let oneRoom = (avgHeightAstranauts + 0.40) * 2 * 2

    let spaceCalc = Math.floor(sizeRocket / oneRoom)

    if (spaceCalc >= 3 && spaceCalc <= 10) {
        console.log(`The spacecraft holds ${spaceCalc} astronauts.`)
    } else if (spaceCalc < 3) {
        console.log(`The spacecraft is too small.`)
    } else {
        console.log(`The spacecraft is too big.`)
    }

}
spaceShip(["3",
"3", 
"4",
"1.68"])