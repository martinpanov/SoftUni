function pipesInPool(input) {
    let v = Number(input[0])
    let p1 = Number(input[1])
    let p2 = Number(input[2])
    let h = Number(input[3])

    let totalP1 = p1 * h
    let totalP2 = p2 * h
    let sum = totalP1 + totalP2
    let difference = Math.abs(sum - v)
    let percentageCalc = (sum / v) * 100
    let percentageP1 = totalP1 / sum * 100
    let percentageP2 = totalP2 / sum * 100

    if (v >= sum) {

        console.log(`The pool is ${percentageCalc.toFixed(2)}% full. Pipe 1: ${percentageP1.toFixed(2)}%. Pipe 2: ${percentageP2.toFixed(2)}%.`)
    } else {
        
        console.log(`For ${h} hours the pool ooverfloows with ${difference} liters.`)
    }
}
pipesInPool(["100", "100", "100", "2.5"])