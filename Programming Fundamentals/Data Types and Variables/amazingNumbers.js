function amazingNumber (num) {
    let numToString = String(num)
    let sum = 0
    for (let i = 0; i < numToString.length; i++) {
        sum += Number(numToString[i])
    }
    console.log(`${num} Amazing? ${sum.toString().includes('9') ? "True" : "False"}`)
}
amazingNumber(999)