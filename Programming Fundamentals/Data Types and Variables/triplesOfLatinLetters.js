function triplesOfLatinLetters (num) {
    for (let i = 0; i < num; i++) {
        let letter = String.fromCharCode(97+i)
        for (let k = 0; k < num; k++) {
            let letterTwo = String.fromCharCode(97+k)
            for (let j = 0; j < num; j++) {
                let letterThree = String.fromCharCode(97+j)
                console.log(`${letter}${letterTwo}${letterThree}`)
            }
        }
    }
}
triplesOfLatinLetters(3)