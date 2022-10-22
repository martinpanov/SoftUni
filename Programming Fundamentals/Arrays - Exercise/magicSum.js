function magicSum(array, sum) {
    let numbers = []
    let pairs = ''
    for (let i = 0; i < array.length; i++) {
        for (let k = i+1; k < array.length; k++) {
            if (array[i] + array[k] === sum) {
                pairs = `${array[i]} ${array[k]}`
                numbers.push(pairs)
            }
        }
        }
    console.log(numbers.join('\n'))
}
magicSum([1, 2, 3, 4, 5, 6],
    6)