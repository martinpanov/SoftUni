function numsDivisibleBy9(input) {
    const num = Number(input[0]);
    const num2 = Number(input[1]);
    let sum = 0;
    for (let i = num ; i <= num2; i++) {
        if (i % 9 === 0) {
            sum += i
        }
    }
    console.log(`The sum: ${sum}`)
    for (let i = num ; i <= num2; i++) {
        if (i % 9 === 0) {
            console.log(i)
        }
    }
}
numsDivisibleBy9(["100", "200"])