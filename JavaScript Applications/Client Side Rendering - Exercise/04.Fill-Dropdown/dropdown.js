import { html, render } from "../node_modules/lit-html/lit-html.js"

const form = document.querySelector('form')
const select = document.getElementById('menu')

getAndRender()

form.addEventListener("submit", addItem)

async function getAndRender() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown')
    const data = await response.json()

    const selectHTML = Object.values(data).map(item => html `<option value="${item._id}">${item.text}</option>`)

    render(selectHTML, select)
}

async function post(body) {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
}


async function addItem(e) {
    e.preventDefault()
    const input = document.getElementById('itemText')

    post({text: input.value})
    
    input.value = ''

    getAndRender()
}