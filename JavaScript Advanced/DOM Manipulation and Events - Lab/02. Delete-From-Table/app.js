function deleteByEmail() {
    let input = document.getElementsByName("email")[0].value
    let emailsTD = document.querySelectorAll("tbody tr td")
    let result = document.getElementById("result")
    let isFound = false
    for (let i = 0; i < emailsTD.length; i++) {
        if (emailsTD[i].textContent === input) {
            result.textContent = "Deleted!"
            isFound = true
            emailsTD[i].parentElement.remove()
        }
    }
    if (!isFound) {
        result.textContent = "Not found."
    }
}