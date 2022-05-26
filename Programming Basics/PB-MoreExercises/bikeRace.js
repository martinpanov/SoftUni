function bikeRace(input) {
    let youngBikers = Number(input[0])
    let oldBikers = Number(input[1])
    let type = input[2]
    let money = 0
    switch(type) {
        case "trail":
            money = youngBikers * 5.5 + oldBikers * 7
        break;
        case "cross-country":
            if (youngBikers + oldBikers >= 50) {
                money = (youngBikers * 8 + oldBikers * 9.5) * 0.75
            } else {
                money = youngBikers * 8 + oldBikers * 9.5
            }
        break;
        case "downhill":
            money = youngBikers * 12.25 + oldBikers * 13.75
        break;
        case "road":
            money = youngBikers * 20 + oldBikers * 21.5
        break;
    }
    let totalAmount = money * 0.95
    console.log(totalAmount.toFixed(2))
}
bikeRace(["10","10","downhill"])