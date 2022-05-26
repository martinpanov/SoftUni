function moving(input) {
    let index = 3;
    let width = Number(input[0]);
    let length = Number(input[1]);
    let height = Number(input[2]);
    let sizeCalc = width * length * height;
    let command = input[index++];
    let cubicMeters = 0;
    let isCommandEqualToDone = true

    while (command !== "Done") {
        let difference = Math.abs(sizeCalc - cubicMeters)
        if (cubicMeters > sizeCalc) {
            isCommandEqualToDone = false
            console.log(`No more free space! You need ${difference} Cubic meters more.`)
            break;
        }
        cubicMeters += Number(command)
        command = input[index++]
    }
    let difference2 = Math.abs(sizeCalc - cubicMeters)
    if (isCommandEqualToDone === true) {
        console.log(`${difference2} Cubic meters left.`)

    }

}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])