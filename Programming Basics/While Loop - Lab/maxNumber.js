function maxNumber(input) {
    let index = 0
    let number = input[index++]
    let maxNumber = Number.MIN_SAFE_INTEGER;
    while (number !== "Stop") {
        let num = Number(number);
        if (maxNumber < num) {
            maxNumber = num
        }
        number = input[index++]
    }
    console.log(maxNumber)
}
maxNumber(["100",
"99",
"80",
"70",
"Stop"])