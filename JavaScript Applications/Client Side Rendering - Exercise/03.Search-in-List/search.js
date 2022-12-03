import { towns } from "./towns.js"
import { html, render } from "../node_modules/lit-html/lit-html.js"

const divTowns = document.getElementById('towns')
const divResult = document.getElementById('result')
const seaarchButton = document.querySelector('button')

const townsHtml = html `
<ul>
   ${towns.map(town => html `<li>${town}</li>`)}
</ul>`

render(townsHtml, divTowns)

seaarchButton.addEventListener("click", search)

function search() {
   const input = document.getElementById('searchText')
   let matchCounter = 0
   const filteredMatches = Array.from(document.querySelectorAll('li')).filter(town => {
      if (town.textContent.includes(input.value)) {
         town.classList.add('active')
         matchCounter++
         return town
      } else {
         town.classList.remove('active')
      }})
   divResult.textContent = `${matchCounter} matches found`
}