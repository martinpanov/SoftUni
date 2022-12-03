import { cats } from "./catSeeder.js"
import {html, render} from "../node_modules/lit-html/lit-html.js"


const allCatsSection = document.getElementById("allCats")
const allCatsHtml = html `<ul>
${cats.map(cat => createCat(cat))}
</ul>`

render(allCatsHtml, allCatsSection)

function createCat(cat) {
    return html `
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click="${onClick}">Show status code</button>
            <div class="status" style="display: none" id="${cat.id}">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`
}

function onClick(e) {
    const statusContent = e.target.parentElement.querySelector("div")
    if (statusContent.style.display === "none") {
        statusContent.style.display = "block"
        e.target.textContent = "Hide status code"
    } else {
        statusContent.style.display = "none"
        e.target.textContent = "Show status code"
    }
}
