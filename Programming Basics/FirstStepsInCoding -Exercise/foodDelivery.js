function foodDelivery(input) {
    const meatMenu = 10.35;
    const fishMenu = 12.40;
    const veggieMenu = 8.15;
    const delivery = 2.50;
    const numMeatMenus = Number(input[0]);
    const numFishMenus = Number(input[1]);
    const numVeggieMenus = Number(input[2]);
    const totalAmount = (numMeatMenus * meatMenu) + (numFishMenus * fishMenu) + (numVeggieMenus * veggieMenu);
    const dessert = totalAmount * 0.2; 
    const finalPrice = totalAmount + dessert + delivery;
    console.log(finalPrice)
}
foodDelivery(["2 ", "4 ", "3 "])