function jsonToHtmlTable(data) {
    let obj = JSON.parse(data)
    let columns = Object.keys(obj[0])
    let startTable = '<table>'
    let endTable = '</table>'
    let res = ``
    console.log(startTable)
    for (let i = 0; i < columns.length; i++) {
        if (i === 0) {
            res += `   <tr><th>${escapeHtml(columns[i])}</th>`
        } else if (i > 0 && i < columns.length - 1) {
            res += `<th>${escapeHtml(columns[i])}</th>`
        } else {
            res += `<th>${escapeHtml(columns[i])}</th></tr>`
        }
        
    }
    console.log(res)
    res = ``
    for (let k = 0; k < columns.length; k++) {
        let rows = Object.values(obj[k])
        for (let j = 0; j < rows.length; j++) {
            if (j === 0) {
                res += `   <tr><td>${escapeHtml(rows[j])}</td>`
            } else if (j > 0 && j < columns.length - 1) {
                res += `<td>${escapeHtml(rows[j])}</td>`
            } else {
                res += `<td>${escapeHtml(rows[j])}</td></tr>`
            }
        }
        console.log(res)
        res = ``
    }
    console.log(endTable)

    function escapeHtml(value) {
        return value
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
jsonToHtmlTable(`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`
)