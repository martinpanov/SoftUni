function binaryToDecimal(binaryNum) {
    let result = 0
    for (let i = binaryNum.length; i > 0; i--) {
        result += Number(binaryNum[binaryNum.length-i]) * Math.pow(2, i)
    }
    console.log(result / 2)
}
binaryToDecimal('11110000')