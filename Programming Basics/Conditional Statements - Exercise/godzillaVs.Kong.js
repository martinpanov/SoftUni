function godzillaVsKong(input) {
    const budget = Number(input[0]);
    const stuntsman = Number(input[1]);
    const outfit = Number(input[2]);
    const decor = budget * 0.1;
    let outFitTotal = outfit * stuntsman;
    if (stuntsman >= 150) {

        outFitTotal *= 0.90
    } else {
        outFitTotal
    }
    let difference = Math.abs(decor + outFitTotal - budget)
    if (decor + outFitTotal > budget) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`)
    }

}
godzillaVsKong(["15437.62", "186", "57.99"])