function giftsFromSanta(input) {
    let N = Number(input[0])
    let M = Number(input[1])
    let S = Number(input[2])

    let number = ""
    for (let i = M; i >= N; i--) {
        if (i % 2 === 0 && i % 3 === 0){
            if (S === i) {
                break
            }
            number += i + " "
        }
    }
    console.log(number)
}
giftsFromSanta(["20",
"1000",
"36"])