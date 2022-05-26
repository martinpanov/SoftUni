function miningRig(input) {
    let oneVideoCardPrice = Number(input[0])
    let onePrehodnikPrice = Number(input[1])
    let consumedElectrictyOneDay = Number(input[2])
    let winForOneDay = Number(input[3])


    let totalPriceCards = oneVideoCardPrice * 13
    let totalPricePrehodnik = onePrehodnikPrice * 13

    let totalPrice = totalPriceCards + totalPricePrehodnik + 1000
    let calcWinForOneDay = winForOneDay - consumedElectrictyOneDay

    let calcTotalWinForOneDay = 13 * calcWinForOneDay
    let daysReturn = totalPrice / calcTotalWinForOneDay

    console.log(totalPrice)
    console.log(Math.ceil(daysReturn))
}
miningRig(["700",
"15",
"0.20",
"2"])