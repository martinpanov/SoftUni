function smallestTwoNumbers(elements) {
    let sortedElements = elements.sort((a,b) => a-b).splice(0,2).join(" ")
    console.log(sortedElements)
}
smallestTwoNumbers([30, 15, 50, 5])