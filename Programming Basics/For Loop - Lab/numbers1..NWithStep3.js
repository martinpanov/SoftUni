function numbersWithStep3(input) {
    const num = Number(input[0]);
    for (let i = 1; i <= num; i += 3) {
        console.log(i);
    }
}
numbersWithStep3(["10"])