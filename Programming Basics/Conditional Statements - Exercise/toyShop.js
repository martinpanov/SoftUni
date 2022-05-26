function toyShop(input) {
    const puzzle = 2.60;
    const doll = 3;
    const teddyBear = 4.1;
    const minion = 8.2;
    const truck = 2;

    let priceTrip = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let toysCount = puzzleCount + dollCount + teddyBearCount + minionCount + truckCount;
    let toysPrice = puzzleCount * puzzle + dollCount * doll + teddyBearCount * teddyBear + minionCount * minion + truckCount * truck;
    if (toysCount >= 50) {
        toysPrice *= 0.75;     
    }
        toysPrice *= 0.90;
    const difference = Math.abs(toysPrice - priceTrip);
    if (toysPrice >= priceTrip) {
        console.log(`Yes! ${difference.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${difference.toFixed(2)} lv needed.`)
    }

}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])