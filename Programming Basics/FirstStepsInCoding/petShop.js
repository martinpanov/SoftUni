function petShop(input) {
    let dogFood = 2.50;
    let catFood = 4;
    let numOfDogFood = Number(input[0]);
    let numOfCatFood = Number(input[1]);
    let totalPrice = (dogFood * numOfDogFood) + (catFood * numOfCatFood);
    console.log(`${totalPrice} lv.`); 
}
petShop(["5", "4"]);