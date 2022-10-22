function printEveryNElement(array, step) {
    let res = []
    array.forEach((element, index) => {
        if (index % step === 0) {
            res.push(element)
        }
    })
    return res
}
printEveryNElement(
['5', 
'20', 
'31', 
'4', 
'20'], 
2)