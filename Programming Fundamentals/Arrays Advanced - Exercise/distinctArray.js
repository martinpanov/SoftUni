function distinticArray(arr) {

    let newArr = []
    for (let el of arr) {
        if (newArr.includes(el)) {
            continue
        } else {
            newArr.push(el)
        }
    }
    console.log(newArr.join(" "))
}
distinticArray([20, 8, 12, 13, 4, 4, 8, 5])