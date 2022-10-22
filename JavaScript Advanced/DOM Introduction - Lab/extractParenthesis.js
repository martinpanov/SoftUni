function extract() {
    let content = document.getElementById('content').textContent
    let regex = /[(](?<words>[\w ]+)[)]/g
    let found = content.match(regex).join("").split("(").join("").split(")")
    let res = ''
    for (let i = 0; i < found.length - 1; i++) {
        if (i === found.length - 2) {
            res += `${found[i]}`
        } else {
            res += `${found[i]}; `
        }
    }
    return res
}