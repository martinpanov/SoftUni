function shopping(input) {
    let budget = Number(input[0]);
    let videoCardQuantitty = Number(input[1]);
    let processorQuantity = Number(input[2]);
    let ramQuantity = Number(input[3]);
    const videoCardPrice = 250 * videoCardQuantitty;
    const processorPrice = videoCardPrice * 0.35;
    const ramPrice = videoCardPrice * 0.1;
    let totalPrice = videoCardPrice + processorQuantity * processorPrice + ramQuantity * ramPrice;
    if (videoCardQuantitty > processorQuantity) {
        totalPrice *= 0.85;
    } else {
        totalPrice
    }
    let difference = Math.abs(totalPrice - budget);
    if (totalPrice <= budget) {
        console.log(`You have ${difference.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`)
    }
}
shopping(["900", "2", "1", "3"])