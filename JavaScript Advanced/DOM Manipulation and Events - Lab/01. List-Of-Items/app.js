function addItem() {
    let list = document.getElementById("items")
    let newElement = document.createElement("li")
    let input = document.getElementById("newItemText").value
    newElement.textContent = input
    list.appendChild(newElement)
}