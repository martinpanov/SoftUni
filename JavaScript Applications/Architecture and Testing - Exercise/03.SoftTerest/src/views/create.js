import { createIdea } from "../api/data.js"

const section = document.getElementById("createPage")

const form = section.querySelector("form")

form.addEventListener("submit", onSubmit)

let ctx = null

export function showCreate(context) {
    ctx = context
    context.showSection(section)
}

async function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(form)
    const title = formData.get("title")
    const description = formData.get("description")
    const img = formData.get("imageURL")

    if (title.length < 6) {
        alert("The title must be at least 6 characters")
        form.reset()
        throw new Error("The title length must be at least 6 characters")
    }

    if (description.length < 10) {
        alert("The description must be at least 10 characters long")
        form.reset()
        throw new Error("The description must be at least 10 characters long")
    }

    if (img.length < 3) {
        alert("The image URL length must be at least 5 characters long")
        form.reset()
        throw new Error("The image URL length must be at least 5 characters long")
    }



    await createIdea({title, description, img})

    form.reset()

    ctx.goTo("/catalog")
}