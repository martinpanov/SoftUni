function vacation(input) {
    let index = 0;
    let moneyNeeded = Number(input[index++])
    let moneyYouHave = Number(input[index++])
    let type = input[index++]
    let savedOrSpendMoney = Number(input[index++])
    let spendCount = 0;
    let days = 0;
    let didYouSaveTheMoney = true
    while (moneyYouHave < moneyNeeded) {
        if (type === "spend") {
            spendCount++
            moneyYouHave -= savedOrSpendMoney
        } else if (type === "save") {
            moneyYouHave += savedOrSpendMoney
            spendCount = 0
        }
        if (moneyYouHave < 0) {
            moneyYouHave = 0;
        }
        days++
        if (spendCount >= 5) {
            didYouSaveTheMoney = false
            console.log("You can't save the money.")
            console.log(`${days}`)
            break;
        }
        type = input[index++]
        savedOrSpendMoney = Number(input[index++])
        
    }

    if (didYouSaveTheMoney === true) {
        console.log(`You saved the money for ${days} days.`)
    }
}
vacation(["2000",
"1000",
"spend",
"1200",
"save",
"2000"])