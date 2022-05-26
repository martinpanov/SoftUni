function sumAndProduct(input) {
    let index = 0
    let n = Number(input[index])
    let stopProgram = false
    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 1; c <= 9; c++) {
                for (let d = 8; d >= c; d--) {
                    if ((a+b+c+d) == (a*b*c*d) && n % 10 == 5) {
                            console.log(`${a}${b}${c}${d}`)
                            stopProgram = true
                            break
                        } else if (Math.floor((a * b * c * d) / (a + b + c + d)) == 3 && n % 3 === 0) {
                                console.log(`${d}${c}${b}${a}`)
                                stopProgram = true
                                break;
                        } else {
                            console.log(`Nothing found`)
                            stopProgram = true
                            break;
                        }
                    }
                    if (stopProgram === true) {
                        break;  
                    }
                }
                if (stopProgram === true) {
                    break;  
                }
            }
            if (stopProgram === true) {
                break;  
            }
        }
    }
sumAndProduct(["123"])