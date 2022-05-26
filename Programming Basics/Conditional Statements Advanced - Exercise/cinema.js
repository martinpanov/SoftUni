function cinema(input) {
    const premiere = 12;
    const normal = 7.5;
    const discount = 5;

    const type = input[0];
    const rows = Number(input[1]);
    const collumns = Number(input[2]);

    let income = 0;

    switch(type) {
        case "Premiere":
            income = rows * collumns * premiere;
            console.log(`${income.toFixed(2)} leva`);
        break;
        case "Normal": 
            income = rows * collumns * normal;
            console.log(`${income.toFixed(2)} leva`);
        break;
        case "Discount":
            income = rows * collumns * discount;
            console.log(`${income.toFixed(2)} leva`);
        break;
    }
}
cinema(["Discount",
"12",
"30"])