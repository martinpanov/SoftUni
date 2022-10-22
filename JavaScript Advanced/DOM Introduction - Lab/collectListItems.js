function extractText() {
    let result
    for (let i = 0; i < document.getElementsByTagName('li').length; i++) {
        result = document.getElementsByTagName('li')[i].textContent
        document.getElementById('result').textContent += result + "\n"
    }

}
