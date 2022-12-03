import { register } from "../api/users.js"

const section = document.getElementById("registerPage")
const form = section.querySelector("form")

form.addEventListener("submit", onSubmit)

let ctx = null

export function showRegister(context) {
    ctx = context
    context.showSection(section)
}

async function onSubmit(e) {
    e.preventDefault()
    const formData = new FormData(form)
    const email = formData.get("email")
    const password = formData.get("password")
    const rePassword = formData.get("repeatPassword")

    if (password !== rePassword) {
        alert("Password doesn't match!")
        form.reset()
        throw new Error("Password doesn't match!")
    }

    if (email.length < 3) {
        alert("Email must be at least 3 characters long")
        form.reset()
        throw new Error("Email must be at least 3 characters long")
    }

    if (password.length < 3) {
        alert("Password must be at least 3 characters long")
        form.reset()
        throw new Error("Password must be at least 3 characters long")
    }

    await register(email, password)
    ctx.navUpdate()
    ctx.goTo("/")
}