import { html, render } from "../node_modules/lit-html/lit-html.js"

renderData()

const searchBtn = document.getElementById('searchBtn')
searchBtn.addEventListener('click', searchResult)

async function getData() {
   const response = await fetch("http://localhost:3030/jsonstore/advanced/table")
   const data = await response.json()
   return data
}

async function renderData() {
   const data = await getData()
   const tbody = document.querySelector('tbody')
   const dataHTML = Object.values(data).map(person => {
      return html `
      <tr>
         <td>${person.firstName} ${person.lastName}</td>
         <td>${person.email}</td>
         <td>${person.course}</td>
      </tr>`
   })

   render(dataHTML, tbody)
}

function searchResult() {
   const input = document.getElementById('searchField')

   if (document.querySelectorAll('.select')) {
      document.querySelectorAll('.select').forEach(selected => {
         selected.classList.remove('select')
      })
   }

   Array.from(document.querySelectorAll("tbody td")).filter(personDetail => {
      if (personDetail.textContent.toLowerCase().includes(input.value.toLowerCase())) {
         return personDetail.parentElement.classList.add("select") 
      }
   })

   input.value = ''
}
