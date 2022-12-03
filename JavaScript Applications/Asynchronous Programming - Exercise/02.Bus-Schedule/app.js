function solve() {
    const firstStop = "depot"
    const url = 'http://localhost:3030/jsonstore/bus/schedule/'
    const departButton = document.getElementById("depart")
    const arriveButton = document.getElementById("arrive")
    const infoSpan = document.querySelector(".info")
    let nextStop

    async function depart() {
        let response
        if (infoSpan.textContent === "Not Connected") {
            response = await fetch(`${url}${firstStop}`)
        } else {
            response = await fetch(`${url}${nextStop}`)
        }
        const data = await response.json()

        departButton.disabled = "true"
        arriveButton.removeAttribute("disabled")

        infoSpan.textContent = `Next stop ${data.name}`
        nextStop = data.next
    }

    function arrive() {
        departButton.removeAttribute("disabled")
        arriveButton.disabled = "true"

        infoSpan.textContent = `Arriving at ${infoSpan.textContent.split("Next stop ")[1]}`
    }

    return {
        depart,
        arrive
    };
}

let result = solve();