function sumTable() {
    let sum = 0
    let res = document.getElementById("sum")
    for (let i = 0; i < document.getElementsByTagName("td").length - 2; i++) {
        if (i % 2 === 1) {
            sum += Number(document.getElementsByTagName("td")[i].textContent)
        }
    }
    res.textContent = sum
}