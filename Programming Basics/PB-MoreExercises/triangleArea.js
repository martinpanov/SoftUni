function triangleArea(input) {
    let side = Number(input[0])
    let height = Number(input[1])
    let face = side * height / 2

    console.log(face.toFixed(2))
}
triangleArea(["15", "35"])