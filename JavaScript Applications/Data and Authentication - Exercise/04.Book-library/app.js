const loadBooks = document.getElementById("loadBooks")
const form = document.querySelector("form")

loadBooks.addEventListener("click", loadAllBooks)

loadAllBooks()

async function loadAllBooks() {
    const url = 'http://localhost:3030/jsonstore/collections/books'
    const tbody = document.querySelector("tbody")
    const response = await fetch(url)
    const data = await response.json()

    const books = Object.entries(data).map(([id,book]) => {
        const tr = document.createElement("tr")

        const bookNameTd = document.createElement("td")
        bookNameTd.textContent = book.title

        const authorTd = document.createElement("td")
        authorTd.textContent = book.author

        const buttonsTd = document.createElement("td")

        const editButton = document.createElement("button")
        editButton.textContent = "Edit"
        editButton.id = id
        editButton.classList.add("edit")
        editButton.addEventListener("click", edit)

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.id = id
        deleteButton.classList.add("delete")
        deleteButton.addEventListener("click", deleteEntry)

        buttonsTd.appendChild(editButton)
        buttonsTd.appendChild(deleteButton)

        tr.appendChild(bookNameTd)
        tr.appendChild(authorTd)
        tr.appendChild(buttonsTd)

        return tr
    })

    tbody.replaceChildren(...books)
}

form.addEventListener("submit", createOrEditBook)

async function createOrEditBook(e) {
    e.preventDefault()
    const url = 'http://localhost:3030/jsonstore/collections/books'
    const formData = new FormData(form)
    const title = formData.get("title")
    const author = formData.get("author")

    if (title === '' || author === '') {
        return
    }

    if (form.querySelector("h3").textContent === "FORM") {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                author: author,
                title: title
            })
        })
    } else {
        const id = document.querySelector("label").id

        const response = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                author: author,
                title: title
            })
        })

        form.querySelector("h3").textContent = "FORM"
        form.querySelector("button").textContent = "Submit"
    }
    loadAllBooks()
}

async function edit(e) {
    const h3 = document.querySelector("h3")
    h3.textContent = "Edit FORM"

    const label = document.querySelector("label")
    label.id = e.target.id

    const titleFromTable = e.target.parentElement.parentElement.children[0]
    const authorFromTable = e.target.parentElement.parentElement.children[1]
    const formButton = document.querySelector("form button")

    const title = document.querySelector("[name='title']")
    title.value = titleFromTable.textContent

    const author = document.querySelector("[name='author']")
    author.value = authorFromTable.textContent

    formButton.textContent = "Save"
}

async function deleteEntry(e) {
    const id = e.target.id
    const url = 'http://localhost:3030/jsonstore/collections/books/'

    const response = await fetch(url + id, {
        method: "DELETE"
    })

    e.target.parentElement.parentElement.remove()
}