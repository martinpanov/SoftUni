function solution() {
    let restockedData = {
        carbohydrate: 0,
        protein: 0,
        fat: 0,
        flavour: 0
    }
    let foodNutrients = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    }

    return function commandsAndData(data) {
        let action = commands()
        let [command, optionOne, optionTwo] = data.split(" ")
        return action[command](optionOne, optionTwo)
    }

    function commands() {
        return {
            restock: (macros, quantity) => {
                restockedData[macros] += Number(quantity)
                return "Success"
            },
            prepare: (recipe, quantity) => {
                for (let [macro, value] of Object.entries(foodNutrients[recipe])) {
                    if (restockedData[macro] < (value * quantity)) {
                        return `Error: not enough ${macro} in stock`
                    }
                }
                for (let [macro, value] of Object.entries(foodNutrients[recipe])) {
                    restockedData[macro] -= value * quantity
                }
                return "Success"
            },
            report: () => {
                return `protein=${restockedData["protein"]} carbohydrate=${restockedData["carbohydrate"]} fat=${restockedData["fat"]} flavour=${restockedData["flavour"]}`
            }
        }
    }


}


let manager = solution();
console.log(manager("prepare turkey 1")); // Success 
console.log(manager("restock protein 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock carbohydrate 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock fat 10"))
console.log(manager("prepare turkey 1"))
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));
 // Error: not enough carbohydrate in stock 

