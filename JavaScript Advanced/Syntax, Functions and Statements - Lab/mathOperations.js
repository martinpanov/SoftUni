function mathOperations(firstNum, secondNum, operation) {
    if (operation === "+") {
        return firstNum + secondNum
    } else if (operation === "-") {
        return firstNum - secondNum
    } else if (operation === "*") {
        return firstNum * secondNum
    } else if (operation === "/") {
        return firstNum / secondNum
    } else if (operation === "%") {
        return firstNum % secondNum
    } else if (operation === "**") {
        return firstNum ** secondNum
    }
}
mathOperations(5, 6, '+')