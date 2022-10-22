function toggle() {
    if (document.querySelector(".head .button").textContent === "Less") {
        document.querySelector(".head .button").textContent = "More"
        document.getElementById("extra").style.display = "none"
    } else if (document.querySelector(".head .button").textContent === "More") {
        document.querySelector(".head .button").textContent = "Less"
        document.getElementById("extra").style.display = "block"
    }
}