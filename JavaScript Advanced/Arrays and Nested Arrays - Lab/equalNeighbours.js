function equalNeighbours(array) {
    let counter = 0
    for (let i = 0; i < array.length; i++) {
        for (let rows = 0; rows < array[i].length; rows++) {
            if (array[i][rows] === array[i][rows + 1]) {
                counter++
            }
        }

        for (let cols = 0; cols < array.length - 1; cols++) {
            if (array[cols][i] === array[cols + 1][i]) {
                counter++
            }
        }
    }
    return counter
}
equalNeighbours([
    ['1', '1', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']])