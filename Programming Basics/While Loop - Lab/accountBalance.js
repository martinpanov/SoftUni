function accountBalance (input){
    let index = 0;
    let amount = input[index++];
    let sum = 0;

    while (amount !== "NoMoreMoney") {
        if (amount <= 0) {
            console.log(`Invalid operation!`)
            break
        }
        sum += Number(amount)
        console.log(`Increase: ${Number(amount).toFixed(2)}`)
        amount = input[index++]
        
    }

    console.log(`Total: ${sum.toFixed(2)}`)
}
accountBalance(["5.51", 
"69.42",
"100",
"NoMoreMoney"])