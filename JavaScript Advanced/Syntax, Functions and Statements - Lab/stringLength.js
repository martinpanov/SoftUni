function stringLength(stringOne, stringTwo, stringThree) {
    let sum = stringOne.length + stringTwo.length + stringThree.length
    console.log(sum)
    sum /= 3
    console.log(Math.floor(sum))
}
stringLength('chocolate', 'ice cream', 'cake')