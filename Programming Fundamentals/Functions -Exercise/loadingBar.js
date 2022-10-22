function loadingBar(number) {
    let percentSignCalc = number / 10
    let dotsSignCalc = Math.abs(percentSignCalc - 10)
    let percentageSign = '%'
    let dots = '.'
    let finalPercentageSigns = percentageSign.repeat(percentSignCalc)
    let finalDotsSigns = dots.repeat(dotsSignCalc)
    if (number < 100) {
        console.log(`${number}% [${finalPercentageSigns}${finalDotsSigns}]`)
        console.log('Still loading...')
    } else {
        console.log(`${number}% Complete!`)
    }
}
loadingBar(100)