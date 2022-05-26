function changeBureau(input) {
    const bitcoin = 1168
    const chineeseCoan = 0.15
    const dollar = 1.76
    const euro = 1.95

    let bitcoinCount = Number(input[0])
    let countChineeseCoan = Number(input[1])
    let commission = Number(input[2])
    
    let convertCoanToBgn = (chineeseCoan * countChineeseCoan) * 1.76

    let sumInBgn = (bitcoin * bitcoinCount) + convertCoanToBgn

    let sumInEur = sumInBgn / euro

    let commissionSum = sumInEur * (commission / 100)
    let totalPrice = sumInEur - commissionSum

    console.log(totalPrice.toFixed(2))

}
changeBureau(["1",
"5",
"5"])