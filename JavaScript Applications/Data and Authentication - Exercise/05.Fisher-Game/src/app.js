const welcomePerson = document.querySelector(".email span")
const logOutButton = document.getElementById("logout")
const loadButton = document.querySelector(".load")
const loginAndRegister = document.getElementById("guest")
const addButton = document.querySelector(".add")
const addForm = document.getElementById("addForm")
const catches = document.getElementById('catches')



if (sessionStorage.getItem("accessToken") !== null) {
    loginAndRegister.style.display = "none"

    welcomePerson.textContent = sessionStorage.getItem("email")
    addButton.disabled = false

    loadCatches()

} else {
    logOutButton.style.display = "none"
    loadCatches()
}


loadButton.addEventListener("click", loadCatches)

addForm.addEventListener("submit", createCatch)

logOutButton.addEventListener("click", logOut)

catches.addEventListener('click', eventHandler);

async function loadCatches() {
    const response = await fetch("http://localhost:3030/data/catches")
    const data = await response.json()

    const allCatches = document.getElementById("catches")
    allCatches.replaceChildren(...data.map(createElements))

}


async function createCatch(e) {
    e.preventDefault()

    const formData = new FormData(addForm)
    const angler = formData.get("angler")
    const weight = formData.get("weight")
    const species = formData.get("species")
    const location = formData.get("location")
    const bait = formData.get("bait")
    const captureTime = formData.get("captureTime")

    const response = await fetch("http://localhost:3030/data/catches", {
        method: "POST",
        headers: {
            'Content-type': "application/json",
            "X-Authorization": sessionStorage.getItem("accessToken")
        },
        body: JSON.stringify({
            "angler": angler,
            "weight": weight,
            "species": species,
            "location": location,
            "bait": bait,
            "captureTime": captureTime
        })
    })
    loadCatches()
}

async function onDelete(ev) {
    const catchId = ev.target.getAttribute("data-id")
    ev.target.parentNode.remove();

    await fetch(`http://localhost:3030/data/catches/${catchId}`, {
        method: 'delete',
        headers: {
            'X-authorization': sessionStorage.getItem("accessToken"),
            'content-type': 'application/json',
        },
    });
}

async function onUpdate(ev) {
    const catchId = ev.target.getAttribute("data-id")

    const data = Object.fromEntries(
        Array.from(ev.target.parentNode.children)
            .filter(el => el.nodeName == 'INPUT')
            .map(el => [el.className, el.value])
    );

    const res = await fetch(`http://localhost:3030/data/catches/${catchId}`, {
        method: 'put',
        headers: {
            'X-authorization': sessionStorage.getItem("accessToken"),
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}


function createElements(item) {
    const isOwner = (sessionStorage.getItem("accessToken") !== null && item._ownerId === sessionStorage.getItem("_id"))

    const element = document.createElement("div")
    element.classList.add = "catch"
    element.innerHTML = `
    <div class="catch">
        <label>Angler</label>
        <input type="text" class="angler" value="${item.angler}" ${!isOwner ? 'disabled' : ''}>
        <label>Weight</label>
        <input type="text" class="weight" value="${item.weight}" ${!isOwner ? 'disabled' : ''}>
        <label>Species</label>
        <input type="text" class="species" value="${item.species}" ${!isOwner ? 'disabled' : ''}>
        <label>Location</label>
        <input type="text" class="location" value="${item.location}" ${!isOwner ? 'disabled' : ''}>
        <label>Bait</label>
        <input type="text" class="bait" value="${item.bait}" ${!isOwner ? 'disabled' : ''}>
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${item.captureTime}" ${!isOwner ? 'disabled' : ''}>
        <button class="update" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Update</button>
        <button class="delete" data-id="${item._id}" ${!isOwner ? 'disabled' : ''}>Delete</button>
    </div>
    `

    return element
}

function logOut() {
    sessionStorage.clear()

    addButton.disabled = "true"
    welcomePerson.textContent = "guest"
    logOutButton.style.display = "none"
    loginAndRegister.style.display = "inline-block"
    loadCatches()
}

function eventHandler(ev) {
    if (ev.target.nodeName !== 'BUTTON') {
        return;
    }
    ev.target.className == 'update' ? onUpdate(ev) : onDelete(ev);
}