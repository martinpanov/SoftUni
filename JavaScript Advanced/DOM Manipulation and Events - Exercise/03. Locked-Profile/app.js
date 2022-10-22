function lockedProfile() {
    let profiles = document.querySelectorAll(".profile")
    let hideItButton = document.createElement("button")
    hideItButton.textContent = "Hide it"
    for (let i = 0; i < profiles.length; i++) {
        let lockedUnlocked = profiles[i].querySelectorAll('input[type="radio"]')
        let showMoreButton = document.getElementsByTagName("button")[i]
        showMoreButton.addEventListener("click", function () {
            if (lockedUnlocked[1].checked === true) {
                if (profiles[i].getElementsByTagName("div")[0].style.display !== "block") {
                    profiles[i].getElementsByTagName("div")[0].style.display = "block"
                    showMoreButton.textContent = "Hide it"
                } else {
                    profiles[i].getElementsByTagName("div")[0].style.display = "none"
                    showMoreButton.textContent = "Show more"
                }
            }
        })
    }
}