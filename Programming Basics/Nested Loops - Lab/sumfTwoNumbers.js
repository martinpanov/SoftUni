function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let isCombinationFound = false
    for (let i = start; i <= end; i++) {
        for (let k = start; k <= end; k++) {
            counter++
            if (i + k === magicNumber) {
                isCombinationFound = true
                console.log(`Combination N:${counter} (${i} + ${k} = ${magicNumber})`)
                break;
            }
        }
        if(isCombinationFound === true) {
            break;
        } 
    }
    if (isCombinationFound === false) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }

}
sumOfTwoNumbers(["88", 
"888", 
"2000"])