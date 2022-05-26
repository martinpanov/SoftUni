function backToThePast(input) {
    let moneyAcquired = Number(input[0])
    let year = Number(input[1])
    let ivansAge = 18
    let leftMoney = moneyAcquired
    for (let i = 1800; i <= year; i++) {
        if (i % 2 === 0) {
            leftMoney -= 12000
        } else {
            leftMoney -= 12000 + ivansAge * 50
        }
        ivansAge++
    }
    if (leftMoney >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${leftMoney.toFixed(2)} dollars left.`)
    } else {
        let moneyLeft = Math.abs(leftMoney)
        console.log(`He will need ${moneyLeft.toFixed(2)} dollars to survive.`)
    }
}
backToThePast(["100000.15", "1808"])