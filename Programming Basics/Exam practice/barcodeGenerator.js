function barcodeGenerator(input) {
    let index = 0
    let firstFourNumbers = input[index++]
    let lastFourNumber = input[index++]
    let res = ""
    for (let i = Number(firstFourNumbers[0]); i <= Number(lastFourNumber[0]); i++) {
        for (let b = Number(firstFourNumbers[1]); b <= Number(lastFourNumber[1]); b++){
            for (let c = Number(firstFourNumbers[2]); c <= Number(lastFourNumber[2]); c++) {
                for (let d = Number(firstFourNumbers[3]); d <= Number(lastFourNumber[3]); d++) {
                        if (i % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                            res += `${i}${b}${c}${d} `
                        } 
                    }
                }
            }
        }
        console.log(res)
    }
barcodeGenerator(["2345",
"6789"])