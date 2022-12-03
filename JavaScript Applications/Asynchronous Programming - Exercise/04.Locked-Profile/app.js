async function lockedProfile() {
    const data = await getData()
    const main = document.getElementById("main")
    main.innerHTML = ''

    for (let i = 0; i < data.length; i++) {
        main.innerHTML += `<div class="profile">
				<img src="./iconProfile2.png" class="userIcon" />
				<label>Lock</label>
				<input type="radio" name="user1Locked" value="lock" checked>
				<label>Unlock</label>
				<input type="radio" name="user1Locked" value="unlock"><br>
				<hr>
				<label>Username</label>
				<input type="text" name="user1Username" value="${data[i].username}" disabled readonly />
				<div class="user1HiddenFields hiddenInfo">
					<hr>
					<label>Email:</label>
					<input type="email" name="user1Email" value="${data[i].email}" disabled readonly />
					<label>Age:</label>
					<input type="email" name="user1Age" value="${data[i].age}" disabled readonly />
				</div>
				
				<button>Show more</button>
			</div>`
    }

    const profiles = document.querySelectorAll(".profile")

    for (let k = 0; k < profiles.length; k++) {
        const lockedUnlocked = profiles[k].querySelectorAll('input[type="radio"]')
        const showMoreButton = document.getElementsByTagName("button")[k]
        showMoreButton.addEventListener("click", function (e) {
            if (lockedUnlocked[1].checked === true) {
                e.target.parentElement.children[9].classList.toggle("hiddenInfo");
                e.target.textContent =
                  e.target.textContent == "Show more" ? "Hide it" : "Show more";
            }
        })
    }
}

async function getData() {
    const response = await fetch("http://localhost:3030/jsonstore/advanced/profiles")
    const data = await response.json()

    return Object.values(data)
}