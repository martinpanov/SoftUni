import { getAllIdeas } from "../api/data.js"

const section = document.getElementById("dashboard-holder")
section.addEventListener("click", onDetailsClick)

let ctx = null

export async function showCatalog(context) {
    ctx = context
    context.showSection(section)
    const allIdeas = await getAllIdeas()
    if (allIdeas.length === 0) {
        section.innerHTML = "<h1>No ideas yet! Be the first one :)</h1>"
    } else {
        section.replaceChildren(...allIdeas.map(createIdeasFragment))
    }
}

function createIdeasFragment(idea) {
    const element = document.createElement("div")
    element.classList = "card overflow-hidden current-card details"
    element.style = 'width: 20rem; height: 18rem;'
    element.innerHTML = `
    <div class="card-body">
        <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}" alt="Card image cap">
    <a data-id="${idea._id}" class="btn" href="/details">Details</a>
    `

    return element
}

function onDetailsClick(e) {
    if (e.target.tagName === "A") {
        e.preventDefault()
        const id = e.target.dataset.id
        if (id) {
            ctx.goTo('/details', id)
        }
    }
}