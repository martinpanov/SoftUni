function rotateArray(array, rotations) {
    for (let i = 0; i < rotations; i++) {
        let lastElement = array.pop()
        array.unshift(lastElement)
    }
    console.log(array.join(" "))
}
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)