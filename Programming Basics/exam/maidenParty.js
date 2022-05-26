function maidenParty(input) {
    const loveLetter = 0.6
    const roseCandle = 7.2
    const keychain = 3.6
    const caricature = 18.2
    const supriseLetter = 22

    let partyCost = Number(input[0])
    let loveLetterCount = Number(input[1])
    let roseCandleCount = Number(input[2])
    let keyChainCount = Number(input[3])
    let caricatureCount = Number(input[4])
    let supriseLetterCount = Number(input[5])
    let totalPrice = 0

    let totalCount = loveLetterCount + roseCandleCount + keyChainCount + caricatureCount + supriseLetterCount
    let totalWinnings = (loveLetterCount * loveLetter) + (roseCandleCount * roseCandle) + (keyChainCount * keychain) + (caricatureCount * caricature) + (supriseLetterCount * supriseLetter)
    if (totalCount >= 25) {
        totalPrice = totalWinnings * 0.35
    }
    let finalPrice = totalWinnings - totalPrice
    let hostingCalc = finalPrice * 0.9
    let difference = Math.abs(hostingCalc - partyCost)
    if (partyCost <= hostingCalc) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`) 
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`)
    }
}
maidenParty(["40.8",
"20",
"25",
"30",
"50",
"10"])