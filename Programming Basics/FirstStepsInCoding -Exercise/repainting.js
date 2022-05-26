function repainting(input) {
    // Materials
    const nylonPerSquareMeter = 1.5;
    const paintPerLiter = 14.5;
    const thinnerPerLiter = 5;
    const extraPaint = 0.1;
    const extraNylon = 2;
    const bag = 0.4;
    const workerPricePerHour = 0.3;
    // Input
    const nylonQuantinty = Number(input[0]);
    const paintQuantity = Number(input[1]);
    const thinnerQuantity = Number(input[2]);
    const workHours = Number(input[3]);
    // Solution
    const nylonCalc = (nylonQuantinty + extraNylon) * nylonPerSquareMeter
    const paintCalc = (paintQuantity * extraPaint + paintQuantity) * paintPerLiter
    const thinnerCalc = thinnerQuantity * thinnerPerLiter
    const totalAmount = nylonCalc +  paintCalc + thinnerCalc + bag;
    const calcWorkersPrice = (totalAmount * workerPricePerHour) * workHours
    const totalAmountPlusWork = totalAmount + calcWorkersPrice
    console.log(totalAmountPlusWork)
}
repainting(["10 ", "11 ", "4 ", "8 "]);