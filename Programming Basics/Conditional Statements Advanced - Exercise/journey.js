function journey(input) {
    const budget = Number(input[0]);
    const season = input[1];
    let priceForHotelOrCamp = 0;
    switch(season) {
        case "summer":
            if (budget <= 100) {
                priceForHotelOrCamp = budget * 0.3;
                console.log("Somewhere in Bulgaria")
                console.log(`Camp - ${priceForHotelOrCamp.toFixed(2)}`)
            } else if (budget > 100 && budget <= 1000) {
                priceForHotelOrCamp = budget * 0.4;
                console.log("Somewhere in Balkans")
                console.log(`Camp - ${priceForHotelOrCamp.toFixed(2)}`)
            } else if (budget >= 1000) {
                priceForHotelOrCamp = budget * 0.9;
                console.log("Somewhere in Europe")
                console.log(`Hotel - ${priceForHotelOrCamp.toFixed(2)}`)
            }
        break;
        case "winter":
            if (budget <= 100) {
                priceForHotelOrCamp = budget * 0.7;
                console.log("Somewhere in Bulgaria")
                console.log(`Hotel - ${priceForHotelOrCamp.toFixed(2)}`)
            } else if (budget > 100 && budget <= 1000) {
                priceForHotelOrCamp = budget * 0.8;
                console.log("Somewhere in Balkans")
                console.log(`Hotel - ${priceForHotelOrCamp.toFixed(2)}`)
            } else if (budget >= 1000) {
                priceForHotelOrCamp = budget * 0.9;
                console.log("Somewhere in Europe")
                console.log(`Hotel - ${priceForHotelOrCamp.toFixed(2)}`)
            }
        break;
    }
}
journey(["1500", "summer"])