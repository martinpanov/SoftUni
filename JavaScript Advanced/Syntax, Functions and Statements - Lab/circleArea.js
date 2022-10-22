function circleArea(param) {
    if (typeof param === "number") {
        let area = Math.PI * param * param
        return area.toFixed(2)
    }

    console.log(`We can not calculate the circle area, because we receive a ${typeof param}.`)
}
circleArea(5)