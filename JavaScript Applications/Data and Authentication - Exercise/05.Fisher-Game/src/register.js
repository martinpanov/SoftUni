const registerForm = document.getElementById("register-form")
document.querySelectorAll(".active").forEach(x => x.classList.remove("active"))
const aRegister = document.getElementById("register")
aRegister.classList.add("active")
const welcomePerson = document.querySelector(".email span")
const logOutButton = document.getElementById("logout")

if (sessionStorage.getItem("accessToken") !== null) {
    welcomePerson.textContent = sessionStorage.getItem("email")
} else {
    logOutButton.style.display = "none"
    welcomePerson.textContent = "guest"
}

registerForm.addEventListener("submit", register)

async function register(e) {
    e.preventDefault()

    const formData = new FormData(registerForm)
    const email = formData.get("email")
    const password = formData.get("password")
    const repeatPassword = formData.get("rePass")
    const pNotification = document.querySelector(".notification")

    if (password !== repeatPassword) {
       pNotification.textContent = "Error: Password doesn't match"
       return
    }

    const url = 'http://localhost:3030/users/register'
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        })

        const data = await response.json()

        if (response.status !== 200) {
            throw new Error(data.message)
        }

        sessionStorage.setItem("email", data.email)
        sessionStorage.setItem("accessToken", data.accessToken)
        sessionStorage.setItem("_id", data._id)

        window.location = './index.html'
    } catch (error) {
        pNotification.textContent = error
    }
}