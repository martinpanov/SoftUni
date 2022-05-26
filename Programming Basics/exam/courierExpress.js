function courierExpress(input) {
    let weightOfParcel = Number(input[0])
    let type = input[1];
    let distance = Number(input[2])
    let priceFor1kg = 0.03
    let priceFor1kgTo10kg = 0.05
    let priceFor10kgTo40kg = 0.10
    let priceFor40kgTo90kg = 0.15
    let priceFor90kgTo150kg = 0.20
    let priceCalc = 0
    let overPricePerKm = 0
    let overPrice = 0
    switch(type) {
        case "standard":
            if (weightOfParcel < 1) {
                priceCalc = priceFor1kg * distance
            } else if (weightOfParcel >= 1 && weightOfParcel < 10) {
                priceCalc = priceFor1kgTo10kg * distance
            } else if (weightOfParcel >= 10 && weightOfParcel < 40) {
                priceCalc = priceFor10kgTo40kg * distance
            } else if (weightOfParcel >= 40 && weightOfParcel < 90) {
                priceCalc = priceFor40kgTo90kg * distance
            } else if (weightOfParcel >= 90 && weightOfParcel < 150) {
                priceCalc = priceFor90kgTo150kg * distance
            }
        break;
        case "express":
            if (weightOfParcel < 1) {
                let priceFor1kgTemp = priceFor1kg * 0.8
                overPricePerKm *= priceFor1kgTemp
                overPrice = distance * overPricePerKm
                priceCalc = priceFor1kgTemp * distance + overPrice
            } else if (weightOfParcel >= 1 && weightOfParcel < 10) {
                let priceFor1kgTo10kgTemp = priceFor1kgTo10kg * 0.4
                overPricePerKm *= priceFor1kgTo10kgTemp
                overPrice = distance * overPricePerKm
                priceCalc = priceFor1kgTo10kg * distance + overPrice
            } else if (weightOfParcel >= 10 && weightOfParcel < 40) {
                let priceFor10kgTo40kgTemp = priceFor10kgTo40kg * 0.05
                overPricePerKm *= priceFor10kgTo40kgTemp
                overPrice = distance * overPricePerKm
                priceCalc = priceFor10kgTo40kg * distance + overPrice
            } else if (weightOfParcel >= 40 && weightOfParcel < 90) {
                let priceFor40kgTo90kgTemp = priceFor40kgTo90kg * 0.02
                overPricePerKm = weightOfParcel * priceFor40kgTo90kgTemp
                overPrice = distance * overPricePerKm
                priceCalc = priceFor40kgTo90kg * distance + overPrice
            } else if (weightOfParcel >= 90 && weightOfParcel < 150) {
                let priceFor90kgTo150kgTemp = priceFor90kgTo150kg * 0.01
                overPricePerKm *= priceFor90kgTo150kgTemp
                overPrice = distance * overPricePerKm
                priceCalc = priceFor90kgTo150kg * distance + overPrice
            }
        break;
    }
    console.log(`The delivery of your shipment with weight of ${weightOfParcel.toFixed(3)} kg. would cost ${priceCalc.toFixed(2)} lv.`)
}
courierExpress(["87",
"express",
"130"])