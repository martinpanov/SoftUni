function sumNumbers(input) {
    let index = 0;
    let num = Number(input[0]);
    let num2 = Number(input[index++]);
    let sum = 0; 
    while (num > sum) {
        num2 = Number(input[index++])
        sum += num2
    }
    console.log(sum)
}
sumNumbers(["20",
"1",
"2",
"3",
"4",
"5",
"6"])