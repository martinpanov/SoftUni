document.querySelectorAll(".active").forEach(x => x.classList.remove("active"))
const aLogin = document.getElementById("login")
aLogin.classList.add("active")
const loginForm = document.getElementById("login-form")
const welcomePerson = document.querySelector(".email span")
const logOutButton = document.getElementById("logout")

if (sessionStorage.getItem("accessToken") !== null) {
    welcomePerson.textContent = sessionStorage.getItem("email")
} else {
    logOutButton.style.display = "none"
    welcomePerson.textContent = "guest"
}

loginForm.addEventListener("submit", login)

async function login(e) {
    e.preventDefault()
    
    const formData = new FormData(loginForm)
    const email = formData.get("email")
    const password = formData.get("password")
    const pNotification = document.querySelector(".notification")
    
    try {
        const response = await fetch("http://localhost:3030/users/login", {
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        
        const data = await response.json()
        
        
        if (response.status !== 200) {
            throw new Error(data.message)
        }
        
        sessionStorage.setItem("email", data.email)
        sessionStorage.setItem("accessToken", data.accessToken)
        sessionStorage.setItem("_id", data._id)
        
        
        welcomePerson.textContent = data.email
        window.location = './index.html'
        
    } catch (error) {
        pNotification.textContent = error
    }
}