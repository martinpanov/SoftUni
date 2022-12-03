function attachEvents() {
    const load = document.getElementById("btnLoad")
    const create = document.getElementById("btnCreate")

    load.addEventListener("click", loadPhoneBook)

    async function loadPhoneBook() {
        const url = 'http://localhost:3030/jsonstore/phonebook'
        const response = await fetch(url)
        const data = await response.json()
        const ul = document.getElementById("phonebook")

        const phoneNumbersAndNames = Object.values(data).map(personAndPhone => {
            const li = document.createElement("li")
            li.textContent = `${personAndPhone.person}: ${personAndPhone.phone}`
            li.setAttribute("id", `${personAndPhone._id}`)
            const deleteButton = document.createElement("button")
            deleteButton.textContent = "Delete"

            li.appendChild(deleteButton)
            return li
        })

        ul.replaceChildren(...phoneNumbersAndNames)

        const deleteButtons = document.querySelectorAll("ul li button")

        deleteButtons.forEach(button => {
            button.addEventListener("click", async () => {
                const li = button.parentElement
                const liID = li.id
                const deleteURL = `http://localhost:3030/jsonstore/phonebook/${liID}`
                const response = await fetch(deleteURL, {
                    method: "DELETE"
                })
                li.remove()
            })
        })
    }

    create.addEventListener("click", createContact)

    async function createContact() {
        const url = 'http://localhost:3030/jsonstore/phonebook'
        const person = document.getElementById("person")
        const phone = document.getElementById("phone")
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                person: person.value,
                phone: phone.value
            })
        })
        loadPhoneBook()
    }
}

attachEvents();