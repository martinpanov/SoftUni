function specialNumbers (num) {
    let sum = 0
    for (let i = 1; i <= num; i++) {
        stringi = String(i)
        for (let j = 0; j < stringi.length; j++) {
            sum += Number(stringi[j])
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${stringi} -> True`)
        } else {
            console.log(`${stringi} -> False`)
        }
        sum = 0
    }
}
specialNumbers(20)