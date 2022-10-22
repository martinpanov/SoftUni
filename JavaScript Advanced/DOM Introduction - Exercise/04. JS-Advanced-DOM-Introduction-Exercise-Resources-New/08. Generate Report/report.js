function generateReport() {
    let headers = Array.from(document.querySelectorAll("table thead tr th"))
    let headerTitles = []
    let checkedHeaderIndexes = []
    headers.forEach((header, index) => {
        if (header.firstElementChild.checked) {
            checkedHeaderIndexes.push(index)
        }
        headerTitles.push(header.textContent.replace(" ", "").toLowerCase())
    })
    let res = []
    let tableRows = Array.from(document.querySelectorAll("tbody tr"))
    tableRows.forEach((row) => {
        let rowValues = Array.from(row.getElementsByTagName("td")).map((td) => td.textContent)
        let obj = {}
        checkedHeaderIndexes.forEach((checkedHeaderIndex) => {
            obj[headerTitles[checkedHeaderIndex]] = rowValues[checkedHeaderIndex]
        })
        res.push(obj)
    })
    document.getElementById("output").value = JSON.stringify(res)
}