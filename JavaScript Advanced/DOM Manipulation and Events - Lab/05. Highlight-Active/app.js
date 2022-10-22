function focused() {
    let boxes = Array.from(document.querySelectorAll("div div"))
    boxes.forEach((box) => {
        let input = box.querySelector("input")
        box.className = "blurred"
        input.addEventListener("focus", function () {
            box.className = "focused"
        })
        input.addEventListener("blur", function () {
            box.className = "blurred"
        })
    })
}