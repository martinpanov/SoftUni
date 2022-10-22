function integerAndFloat (firstNum, secondNum, thirdNum) {
    let isInteger = true
    let sum = String(firstNum + secondNum + thirdNum)
    for (let i = 0; i < sum.length; i++) {
        if (sum[i] === ".") {
            console.log(`${sum} - Float`)
            isInteger = false
            break;
        } 
    }
    if (isInteger === true) {
        console.log(`${sum} - Integer`)
    }
}
integerAndFloat(100, 200, 303)