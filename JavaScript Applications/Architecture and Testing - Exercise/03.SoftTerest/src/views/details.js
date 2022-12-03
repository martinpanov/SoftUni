import { deleteIdea, getIdeaByID } from "../api/data.js"

const section = document.getElementById("detailsPage")
section.addEventListener("click", onDelete)

let ctx
let deleteId

export async function showDetails(context, id) {
    ctx = context
    deleteId = id
    const idea = await getIdeaByID(id)
    context.showSection(section)
    section.innerHTML = detailsHTML(idea)
}

function detailsHTML(idea) {
    let html = `            
    <img class="det-img" src="${idea.img}" />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>`
    const user = JSON.parse(sessionStorage.getItem("userDetails"))

    if (user && user._id === idea._ownerId) {
        html += `
        <div class="text-center">
                <a class="btn detb" href="">Delete</a>
        </div>
        `
    }

    return html
}

function onDelete(e) {
    if (e.target.tagName === "A") {
        e.preventDefault()
        deleteIdea(deleteId)
        ctx.goTo("/")
    }
}