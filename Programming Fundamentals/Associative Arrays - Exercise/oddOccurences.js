function oddOccurences(inputString) {
    let map = new Map()
    let inputArray = inputString.split(" ")
    let counter = 0
    for (let el of inputArray) {
        let toLowerCase = el.toLowerCase()
        if (!map.has(toLowerCase)) {
            counter = 1
            map.set(toLowerCase, counter)
        } else {
            let oldValue = map.get(toLowerCase)
            map.set(toLowerCase, oldValue+=1)
        }
    }
    let finalResult = ""
    for (let el of map) {
        if (el[1] % 2 !== 0) {
            finalResult += `${el[0]} `
        }
    }
    console.log(finalResult)
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')