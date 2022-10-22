function fancyBarcode(data) {
    let reggex = /@#+[A-Z]{1}(?<group>[A-Za-z0-9]{4,})[A-Z]@#+/
    let amountOfBarcodes = data.shift()
    for (let i = 0; i < amountOfBarcodes; i++) {
        let currentBarcode = data[i]
        if (reggex.test(currentBarcode)) {
            let digits = ""
            for (let k = 0; k < currentBarcode.length; k++) {
                let currentLetter = currentBarcode[k]
                if (/[0-9]/.test(currentLetter)) {
                    digits += currentLetter
                }
            }
            if (digits.length === 0) {
                console.log('Product group: 00')
            } else {
                console.log(`Product group: ${digits}`)
            }
        } else {
            console.log('Invalid barcode')
        }
    }
}   
fancyBarcode((["3", "@#FreshFisH@#", "@###Brea0D@###", "@##Che4s6E@##"]))