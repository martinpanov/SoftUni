function evenPositionElements(elements) {
    let result = elements.filter((numbers, index) => {
        if (index % 2 === 0) {
            return numbers
        }
    })
    console.log(result.join(" "))
}
evenPositionElements(['5', '10'])