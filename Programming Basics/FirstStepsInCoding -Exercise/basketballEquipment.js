function basketballEquipment(input) {
    const yearPrice = Number(input[0]);
    const shoes = yearPrice - (0.4 * yearPrice);
    const suit = shoes - (0.2 * shoes);
    const ball = suit / 4;
    const acc = ball / 5; 
    const totalAmount = yearPrice + shoes + suit + ball + acc;
    console.log(totalAmount);
}
basketballEquipment (["365"]);