function triangleOfNumbers (num) {
    for (let rows = 1; rows <= num; rows++) {
        let number = ''
        for (let cols = 1; cols <= rows; cols++) {
            number += `${rows} `
        }
        console.log(number)
    }
}
triangleOfNumbers(3)