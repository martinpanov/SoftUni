function cleverLily(input) {
    let age = Number(input[0])
    let washingMachine = Number(input[1])
    let toyPrice = Number(input[2])
    let tempMoney = 10
    let money = 0
    let toyCount = 0
    let toyTotalAmount = 0
    let totalMoney
    let diff = 0
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            money += tempMoney
            tempMoney += 10
            money -= 1
        } else {
            toyCount++
        }
    }
    toyTotalAmount = toyCount * toyPrice
    totalMoney = toyTotalAmount + money
    diff = Math.abs(totalMoney - washingMachine)

    if (totalMoney >= washingMachine) {
        console.log(`Yes! ${diff.toFixed(2)}`)
    } else {
        console.log(`No! ${diff.toFixed(2)}`)
    }

}
cleverLily(["10",
"170.00",
"6"])