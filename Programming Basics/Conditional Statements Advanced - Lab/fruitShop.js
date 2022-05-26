function fruitShop(input) {
    const bananaPrice = 2.5;
    const applePrice = 1.2;
    const orangePrice = 0.85;
    const grapefruitPrice = 1.45;
    const kiwiPrice = 2.7;
    const pineApplePrice = 5.5;
    const grapesPrice = 3.85

    const bananaPriceWeekend = 2.7;
    const applePriceWeekend = 1.25;
    const orangePriceWeekend = 0.9;
    const grapefruitPriceWeekend = 1.6;
    const kiwiPriceWeekend = 3;
    const pineApplePriceWeekend = 5.6;
    const grapesPriceWeekend = 4.2;

    const type = input[0];
    const day = input[1];
    const quantity = Number(input[2]);
    let price = 0;

    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
            if (type === "banana") {
                price = quantity * bananaPrice
                console.log(price.toFixed(2))
            } else if (type === "apple") {
                price = quantity * applePrice
                console.log(price.toFixed(2))
            } else if (type === "orange") {
                price = quantity * orangePrice
                console.log(price.toFixed(2))
            } else if (type === "grapefruit") {
                price = quantity * grapefruitPrice
                console.log(price.toFixed(2))
            } else if (type === "kiwi") {
                price = quantity * kiwiPrice
                console.log(price.toFixed(2))
            } else if (type === "pineapple") {
                price = quantity * pineApplePrice
                console.log(price.toFixed(2))
            } else if (type === "grapes") {
                price = quantity * grapesPrice
                console.log(price.toFixed(2))
            } else{
                console.log("error")
            }
    } else if (day == "Saturday" || day == "Sunday") {
            if (type === "banana") {
                price = quantity * bananaPriceWeekend
                console.log(price.toFixed(2))
            } else if (type === "apple") {
                price = quantity * applePriceWeekend
                console.log(price.toFixed(2))
            } else if (type === "orange") {
                price = quantity * orangePriceWeekend
                console.log(price.toFixed(2))
            } else if (type === "grapefruit") {
                price = quantity * grapefruitPriceWeekend
                console.log(price.toFixed(2))
            } else if (type === "kiwi") {
                price = quantity * kiwiPriceWeekend
                console.log(price.toFixed(2))
            } else if (type === "pineapple") {
                price = quantity * pineApplePriceWeekend
                console.log(price.toFixed(2))
            } else if (type === "grapes") {
                price = quantity * grapesPriceWeekend
                console.log(price.toFixed(2))
            } else {
                console.log("error")
            }
        } else{
        console.log("error")
    }        
}
fruitShop(["tomato",
"Monday",
"0.5"])