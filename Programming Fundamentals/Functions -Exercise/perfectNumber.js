function perfectNumber(number) {
    let isPerfectNumber = false
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            isPerfectNumber = true
        } else {
            isPerfectNumber = false
        }

    }
    if (isPerfectNumber) {
        console.log('We have a perfect number!')
    } else {
        console.log("It's not so perfect.")
    }
}
perfectNumber(28)