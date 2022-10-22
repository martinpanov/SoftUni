function rectangle(width, height, color) {
    color = color.replace(color.charAt(0), color.charAt(0).toUpperCase())
    return {
        "width": width,
        "height": height,
        "color": color,
        calcArea() {
            return Number(width) * Number(height)
        }
    }
}


let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());