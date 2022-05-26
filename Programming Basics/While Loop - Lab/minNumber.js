function minNumber(input) {
    let index = 0
    let number = input[index++]
    let minNumber = Number.MAX_SAFE_INTEGER;
    while (number !== "Stop") {
        let num = Number(number);
        if (minNumber > num) {
            minNumber = num
        }
        number = input[index++]
    }
    console.log(minNumber)
}
minNumber(["45",
"-20",
"7",
"99",
"Stop"])