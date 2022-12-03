async function getInfo() {
    const stopId = document.getElementById("stopId")
    const stopNameDiv = document.getElementById("stopName")
    const busesUl = document.getElementById("buses")
    try {
        busesUl.innerHTML = ``
        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${stopId.value}`)
        const data = await response.json()
    
        stopNameDiv.textContent = data.name
    
        Object.entries(data.buses).forEach(bus => {
            const li = document.createElement("li")
            li.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`
            busesUl.appendChild(li)
        })
    } catch (error) {
        busesUl.innerHTML = ``
        stopNameDiv.textContent = "Error"
    }
}