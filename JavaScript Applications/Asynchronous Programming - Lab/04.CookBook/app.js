async function recipes() {
    const response = await fetch("http://localhost:3030/jsonstore/cookbook/recipes")
    const data = await response.json()
    const main = document.getElementsByTagName("main")[0]
    const mainP = document.getElementsByTagName("p")[0]
    main.removeChild(mainP)

    for (let [item, itemValue] of Object.entries(data)) {
        const article = document.createElement("article")
        article.classList.add("preview")

        const div = document.createElement("div")
        div.classList.add("title")

        const h2 = document.createElement("h2")
        h2.textContent = itemValue.name

        div.appendChild(h2)

        const divSmall = document.createElement("div")
        divSmall.classList.add("small")

        const img = document.createElement("img")
        img.src = itemValue.img

        divSmall.appendChild(img)

        article.appendChild(div)
        article.appendChild(divSmall)

        main.appendChild(article)

    }

    const articles = document.getElementsByClassName("preview")

    for (let i = 0; i < articles.length; i++) {
        articles[i].addEventListener("click", recipe)

        async function recipe(e) {
            const response = await fetch(`http://localhost:3030/jsonstore/cookbook/details/0${i+1}`)
            const data = await response.json()

            const article = document.createElement("article")

            const h2 = document.createElement("h2")
            h2.textContent = data.name
            article.appendChild(h2)

            const divBand = document.createElement("div")
            divBand.classList.add("band")

            const divThumb = document.createElement("div")
            divThumb.classList.add("thumb")

            const img = document.createElement("img")
            img.src = data.img
            divThumb.appendChild(img)

            const divIngredients = document.createElement("div")
            divIngredients.classList.add("ingredients")

            const h3 = document.createElement("h3")
            h3.textContent = "Ingredients:"
            divIngredients.appendChild(h3)

            const ul = document.createElement("ul")

            data.ingredients.forEach(ingredient => {
                const li = document.createElement("li")
                li.textContent = ingredient
                ul.appendChild(li)
            })

            const divDescription = document.createElement("div")
            divDescription.classList.add("description")

            const h3Description = document.createElement("h3")
            h3Description.textContent = "Preparation:"
            divDescription.appendChild(h3Description)

            data.steps.forEach(step => {
                const p = document.createElement("p")
                p.textContent = step
                divDescription.appendChild(p)
            })

            divBand.appendChild(divThumb)

            divIngredients.appendChild(ul)

            divBand.appendChild(divIngredients)

            article.appendChild(divBand)

            article.appendChild(divDescription)

            main.replaceChild(article, e.target)
        }
    }
}
recipes()