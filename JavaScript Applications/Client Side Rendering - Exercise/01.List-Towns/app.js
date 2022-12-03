import {html, render} from "../node_modules/lit-html/lit-html.js"

const input = document.getElementById("towns")
const loadButton = document.getElementById("btnLoadTowns")
const div = document.getElementById("root")


loadButton.addEventListener("click", loadItems)

function loadItems(e) {
    e.preventDefault()
    const towns = input.value.split(", ")
    const result = html `<ul>${towns.map(town => {
        return html `<li>${town}</li>`
    })}</ul>`
    render(result, div)
}
