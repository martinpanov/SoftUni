function validate() {
    let regex = /^\S+@\S+\.\S+$/g
    let input = document.getElementById("email")
    input.addEventListener("change", function (event) {
        let match = input.value.match(regex)
        if (match === null) {
            input.className = "error"
        } else {
            input.className = ""
        }
    })
}