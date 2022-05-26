function coins(input) {
    let change = Number(input[0]);
    let changeCounter = 0;
    let changeConvert = parseInt(change * 100);
    while (changeConvert > 0) {
        if (changeConvert - 200 >= 0) {
            changeCounter++
            changeConvert -= 200
        } else if (changeConvert - 100 >= 0) {
            changeCounter++
            changeConvert -= 100
        } else if (changeConvert - 50 >= 0) {
            changeCounter++
            changeConvert -= 50
        } else if (changeConvert - 20 >= 0) {
            changeCounter++
            changeConvert -= 20
        } else if (changeConvert - 10 >= 0) {
            changeCounter++
            changeConvert -= 10
        } else if (changeConvert - 5 >= 0) {
            changeCounter++
            changeConvert -= 5
        } else if (changeConvert - 2 >= 0) {
            changeCounter++
            changeConvert -= 2
        } else if (changeConvert - 1 >= 0) {
            changeCounter++
            changeConvert -= 1
        }
    }
    console.log(changeCounter)
}
coins(["2.73"])