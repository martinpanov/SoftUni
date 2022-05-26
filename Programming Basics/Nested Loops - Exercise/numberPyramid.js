function numberPyramid(input) {
    let number = Number(input[0]);
    let currentNumber = 1;
    let isNumberReached = false
    let printLine = ""
    for (let i = 1; i <= number; i++) {
        for (let j = 1; j <= i; j++) {
            if (currentNumber > number) {
                isNumberReached = true
                break;
            }
            printLine += currentNumber + " "
            currentNumber++
        }
        
        console.log(printLine);
        printLine = "";
        if (isNumberReached) {
            break;
        }
    }
}
numberPyramid(["7"])