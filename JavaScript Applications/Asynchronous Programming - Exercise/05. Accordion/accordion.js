async function solution() {
    const response = await fetch('http://localhost:3030/jsonstore/advanced/articles/list')
    const data = await response.json()

    const items = document.createDocumentFragment()
    const mainSection = document.getElementById("main")

    data.forEach(item => {
        const divAccordion = document.createElement("div")
        divAccordion.classList.add("accordion")

        const divHead = document.createElement("div")
        divHead.classList.add("head")
        divAccordion.appendChild(divHead)

        const span = document.createElement("span")
        span.textContent = item.title
        divHead.appendChild(span)

        const button = document.createElement("button")
        button.classList.add("button")
        button.id = item._id
        button.setAttribute("onclick", 'getContent(event)')
        button.textContent = "More"
        divHead.appendChild(button)

        const divExtra = document.createElement("div")
        divExtra.classList.add("extra")
        divAccordion.appendChild(divExtra)

        const p = document.createElement("p")
        divExtra.appendChild(p)

        items.appendChild(divAccordion)
    })

    mainSection.appendChild(items)
}

async function getContent(e) {
    const response = await fetch(`http://localhost:3030/jsonstore/advanced/articles/details/${e.currentTarget.id}`)
    const data = await response.json()
    const extra = e.target.parentElement.parentElement.querySelector(".extra")
    const paragraph = e.target.parentElement.parentElement.querySelector(".extra p")
    const button = e.target
    paragraph.textContent = data.content
    
    if (extra.style.display === "") {
        extra.style.display = "inline"
        button.textContent = "Less"
    } else if (extra.style.display === "inline") {
        extra.style.display = ""
        button.textContent = "More"
    }
}

solution()