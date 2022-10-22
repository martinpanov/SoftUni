function magicMatrices(matrix) {
    let sumRows = []
    let sumForRows = 0
    let sumCols = []
    let sumForCols = 0
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[i].length; k++) {
            sumForRows += matrix[i][k]
            if (k > matrix.length - 1) {
                continue
            }
            sumForCols += matrix[k][i]
        }
        sumRows.push(sumForRows)
        sumCols.push(sumForCols)
        if (sumRows.length > 1) {
            if (sumRows[i - 1] !== sumForRows) {
                return false
            }
        }
        if (sumCols.length > 1) {
            if (sumRows[i - 1] !== sumForCols) {
                return false
            }
        }
        sumForRows = 0
        sumForCols = 0
    }
    return true
}
console.log(magicMatrices([[1, 0],
    [1,100],
    [1,1]]))