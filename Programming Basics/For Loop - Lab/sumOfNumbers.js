function sumOfNumbers(input) {
    const number = String(input[0]);
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Number(number.charAt(i))
    }
    console.log(`The sum of the digits is:${sum}`)
}
sumOfNumbers(["1234"])