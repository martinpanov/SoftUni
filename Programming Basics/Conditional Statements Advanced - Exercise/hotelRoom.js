function hotelRoom(input) {
    const month = input[0];
    const sleepOvers = Number(input[1]);
    switch(month) {
        case "October":
        case "May":
            studio = 50;
            apartment = 65;
            if (sleepOvers > 7 && sleepOvers <= 14) {
                studio *= 0.95
                finalPriceStudio = studio * sleepOvers
            } else if (sleepOvers > 14) {
                studio *= 0.7;
                finalPriceStudio = studio * sleepOvers
            } else {
                finalPriceStudio = studio * sleepOvers
            }
            if (sleepOvers > 14) {
                apartment *= 0.9;
                finalPrice = apartment * sleepOvers
            } else {
                finalPrice = apartment * sleepOvers
            }
        console.log(`Apartment: ${finalPrice.toFixed(2)} lv.`)
        console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`)
        break;
        case "June":
        case "September":
            studio = 75.2;
            apartment = 68.7;
            if (sleepOvers > 14) {
                studio *= 0.8;
                finalPriceStudio = studio * sleepOvers
            } else {
                finalPriceStudio = studio * sleepOvers
            }
            if (sleepOvers > 14) {
                apartment *= 0.9;
                finalPrice = apartment * sleepOvers
            } else {
                finalPrice = apartment * sleepOvers
            }
        console.log(`Apartment: ${finalPrice.toFixed(2)} lv.`)
        console.log(`Studio: ${finalPriceStudio.toFixed(2)} lv.`)
        break;
        case "July":
        case "August":
            studio = 76 * sleepOvers
            apartment = 77;
            if (sleepOvers > 14) {
                apartment *= 0.9;
                finalPrice = apartment * sleepOvers
            } else {
                finalPrice = apartment * sleepOvers
            }
        console.log(`Apartment: ${finalPrice.toFixed(2)} lv.`)
        console.log(`Studio: ${studio.toFixed(2)} lv.`)
        break;
    }
}
hotelRoom(["August",
"20"])