function tickets(ticketDescription, sortingCrtieria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination
            this.price = Number(price)
            this.status = status
        }
    }


    let res = []

    for (let ticket of ticketDescription) {
        let [destination, price, status] = ticket.split("|")
        let info = new Ticket(destination, price, status)
        res.push(info)
    }

    switch (sortingCrtieria) {
        case "destination":
            res.sort((a,b) => a.destination.localeCompare(b.destination))
            break
        case "price":
            res.sort((a, b) => a.price - b.price)
            break
        case "status":
            res.sort((a,b) => a.status.localeCompare(b.status))
            break
    }
    return res
}

console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'))