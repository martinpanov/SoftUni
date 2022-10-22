function primeNumberCheck(number) {
    let boolean = true
    for (let divider = 2; divider <= Math.sqrt(number); divider++) {
        if (number % divider === 0) {
            boolean = false
            break
        }
    }
    console.log(boolean)
}
primeNumberCheck(81)