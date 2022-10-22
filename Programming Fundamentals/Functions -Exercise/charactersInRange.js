function charactersInRange(charOne, charTwo) {
    let minNumber = Math.min(charOne.charCodeAt(), charTwo.charCodeAt())
    let maxNumber = Math.max(charOne.charCodeAt(), charTwo.charCodeAt())
    let res = []
    for (let i = minNumber + 1; i < maxNumber; i++) {
        
        res.push(String.fromCharCode(i))
    }
    console.log(res.join(' '))
}
charactersInRange('a','d')