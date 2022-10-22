function areaAndVolumeCalculator(area, vol, input) {
    let parsedInput = JSON.parse(input)
    let res = []
    for (let el of parsedInput) {
        let calculateArea = area.call(el)
        let calculateVol = vol.call(el)

        res.push({
            area: calculateArea,
            volume: calculateVol
        })
    }
    return res
}
areaAndVolumeCalculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
]`)

function area() {
    return Math.abs(this.x * this.y);
}

function vol() {
    return Math.abs(this.x * this.y * this.z);
}    
