function tseamAccount(input) {
    let peterGames = input.shift().split(" ")
    for (let el of input) {
        let [command, game, expansion] = el.split(" ")
        switch(command) {
            case "Play!":
            break
            case "Install":
                if (!peterGames.includes(game)) {
                    peterGames.push(game)
                }
            break
            case "Uninstall":
                if (peterGames.includes(game)) {
                    peterGames.splice(peterGames.indexOf(game), 1)
                }
            break
            case "Update":
                if (peterGames.includes(game)) {
                    let updatedGame = peterGames.splice(peterGames.indexOf(game), 1)
                    peterGames.push(updatedGame.join(""))
                }
            break
            case "Expansion":
                game = el.split("-").join(" ").split(" ")[1]
                expansion = el.split("-")[1]
                if (peterGames.includes(game)) {
                    let gameExpansion = `${game}:${expansion}`
                    let slicedElementsToGameExpansion = peterGames.slice(0, peterGames.indexOf(game)+1)
                    let slicedElementsAfterGameExpansion = peterGames.slice(peterGames.indexOf(game) + 1, peterGames.lenth)
                    peterGames = `${slicedElementsToGameExpansion.join(" ")} ${gameExpansion} ${slicedElementsAfterGameExpansion.join(" ")}`
                    peterGames = peterGames.split(" ")
                }
            break
        }
    }
    console.log(peterGames.join(" "))
}
tseamAccount(['WoW Diablo CS',
'Install LoL',
'Uninstall WoW',
'Update Diabloz',
'Expansion CS-Go',
'Play!'])