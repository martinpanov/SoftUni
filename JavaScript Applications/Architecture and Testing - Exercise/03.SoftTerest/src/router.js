export function initiliaze(links) {
    const view = document.getElementById("pages")
    const nav = document.querySelector("nav")
    nav.addEventListener("click", onNavigate)

    const context = {
        showSection,
        goTo,
        navUpdate
    }

    return context

    function showSection(section) {
        view.replaceChildren(section)
        view.style.display = "block"
    }
    
    
    function onNavigate(e) {
        let target = e.target
    
        if (e.target.tagName === "IMG") {
            target = e.target.parentElement
    
        }
    
        if (target.tagName === "A") {
            e.preventDefault()
            const url = new URL(target.href)
            goTo(url.pathname)
        }
    
    }
    
    function goTo(page, ...params) {
        const handler = links[page]
        if (typeof handler === "function") {
            handler(context, ...params)
        }
    }

    function navUpdate() {
        const user = sessionStorage.getItem("userDetails")

        if (user) {
            nav.querySelectorAll(".guest").forEach(element => element.style.display = "none")
            nav.querySelectorAll(".member").forEach(element => element.style.display = "block")
        } else {
            nav.querySelectorAll(".guest").forEach(element => element.style.display = "block")
            nav.querySelectorAll(".member").forEach(element => element.style.display = "none")
        }
    }
}
