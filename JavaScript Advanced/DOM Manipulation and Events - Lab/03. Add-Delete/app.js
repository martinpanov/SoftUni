function addItem() {
    let list = document.getElementById("items")
    let newElement = document.createElement("li")
    let input = document.getElementById("newItemText").value
    newElement.textContent = input
    
    let deleteButton = document.createElement("a")
    deleteButton.href = "#"
    deleteButton.textContent = '[DELETE]'
    deleteButton.style.color = 'red'
    deleteButton.addEventListener("click", function (event) {
        event.target.parentElement.remove()
    })
    newElement.appendChild(deleteButton)
    list.appendChild(newElement)
    input.value = ""
    
}