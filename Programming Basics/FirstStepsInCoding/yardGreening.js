function yardGreening(input) {
    let area = Number(input[0]);
    let calcTotalPriceBeforeDiscount = area * 7.61;
    let discount = 18 / 100;
    let calcDiscount = calcTotalPriceBeforeDiscount * discount;
    let calcTotalPriceAfterDiscount = calcTotalPriceBeforeDiscount - calcDiscount
    console.log(`The final price is: ${calcTotalPriceAfterDiscount} lv.`)
    console.log(`The discount is: ${calcDiscount} lv.`)
}
yardGreening(["550"]);