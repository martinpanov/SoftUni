function addItem() {
    let textInput = document.getElementById("newItemText")
    let valueInput = document.getElementById("newItemValue")
    let newOptionElement = document.createElement("option")
    let menu = document.getElementById("menu")
    newOptionElement.textContent = textInput.value
    newOptionElement.value = valueInput.value
    menu.appendChild(newOptionElement)
    textInput.value = ''
    valueInput.value = ''
}