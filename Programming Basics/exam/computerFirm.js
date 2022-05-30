function computerFirm(input) {
    let index = 0;
    let computersCount = Number(input[index++])
    let ratingAndPossibleSales = input[index++]
    let rating = 0;
    let possibleSales = 0;
    let sales = 0;
    let ratingCount = 0;
    let totalSales = 0
    for (let i = 0; i < computersCount; i++) {
        rating = Number(ratingAndPossibleSales.charAt(2))
        ratingCount += rating
        possibleSales = Number(ratingAndPossibleSales.charAt(0) + ratingAndPossibleSales.charAt(1))
        if (rating === 2) {
            sales = possibleSales * 0
        } else if (rating === 3) {
            sales = possibleSales * 0.5
        } else if (rating === 4) {
            sales = possibleSales * 0.7
        } else if (rating === 5) {
            sales = possibleSales * 0.85
        } else if (rating === 6) {
            sales = possibleSales * 1
        }
        totalSales += sales
        ratingAndPossibleSales = input[index++]
    }
    let ratingCalc = ratingCount / computersCount
    console.log(totalSales.toFixed(2))
    console.log(ratingCalc.toFixed(2))
}
computerFirm(["3",
"103",
"103",
"103"])