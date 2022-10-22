function printAndSum (startNum, endNum) {
    let currentNum = ''
    let sum = 0
    for (let i = startNum; i <= endNum; i++) {
        currentNum += `${startNum} `
        sum += startNum
        startNum++
    }
    console.log(currentNum)
    console.log(`Sum: ${sum}`)
}
printAndSum(50, 60)