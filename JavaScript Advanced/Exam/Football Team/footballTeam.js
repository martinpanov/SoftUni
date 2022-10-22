class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName
        this.country = country
        this.invitedPlayers = []
    }

    newAdditions(footballPlayers) {
        let isFound = false
        let footBallersInvited = []
        for (let player of footballPlayers) {
            let [name, age, playerValue] = player.split("/")
            footBallersInvited.push(name)

            this.invitedPlayers.forEach((footballer) => {
                if (footballer.name === name) {
                    isFound = true
                    if (footballer.playerValue > playerValue) {
                        footballer.playerValue = playerValue
                        return
                    }
                }
            })

            if (isFound) {
                continue
            }

            this.invitedPlayers.push({
                name: name,
                age: age,
                playerValue: playerValue
            })
        }

        return `You successfully invite ${footBallersInvited.join(", ")}.`
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split("/")
        let isFound = false
        let indexOfFoundPlayer
        this.invitedPlayers.forEach((player, index) => {
            if (player.name === name) {
                isFound = true
                indexOfFoundPlayer = index
                if (player.playerValue > playerOffer) {
                    let priceDifference = player.playerValue - playerOffer
                    throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
                }
            }
        })

        if (!isFound) {
            throw new Error(`${name} is not invited to the selection list!`)
        }

        this.invitedPlayers[indexOfFoundPlayer].playerValue = "Bought"

        return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
    }

    ageLimit(name, age) {
        let isFound = false

        for (let player of this.invitedPlayers) {
            if (player.name === name) {
                isFound = true
                if (player.age < age && age - player.age < 5) {
                    let ageDifference = age - player.age
                    return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
                } else if (player.age < age && age - player.age > 5) {
                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                } else {
                    return `${name} is above age limit!`
                }
            }
        }

        if (!isFound) {
            throw new Error(`${name} is not invited to the selection list!`)
        }
    }

    transferWindowResult() {
        let res = 'Players list:\n'
        this.invitedPlayers.forEach((player, index) => {
            if (index === this.invitedPlayers.length - 1) {
                res += `Player ${player.name}-${player.playerValue}`
            } else {
                res += `Player ${player.name}-${player.playerValue}\n`
            }
        })
        return res
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());




