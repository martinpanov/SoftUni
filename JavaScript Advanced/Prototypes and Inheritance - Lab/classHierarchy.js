function classHierarchy() {
    class Figure {
        constructor(unit = "cm") {
            this.unit = unit
        }
        get area() {

        }
        changeUnits(value) {
            this.unit = value
        }

        toString() {
            return `Figures units: ${this.unit}`
        }

    }

    class Circle extends Figure {
        constructor(radius, unit) {
            super(unit)
            this._radius = radius
        }

        get radius() {
            let radius = this._radius
            switch (this.unit) {
                case "m":
                    return radius *= 0.01
                case "mm":
                    return radius *= 10
                default:
                    return radius
            }
        }

        get area() {
            return Math.PI * this.radius * this.radius
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`
        }
    }

    class Rectangle extends Figure {
        constructor(width, height, unit) {
            super(unit)
            this._width = width
            this._height = height
        }

        get width() {
            let width = this._width
            switch (this.unit) {
                case "m":
                    return width *= 0.01
                case "mm":
                    return width *= 10
                default:
                    return width
            }
        }

        get height() {
            let height = this._height
            switch (this.unit) {
                case "m":
                    return height *= 0.01
                case "mm":
                    return height *= 10
                default:
                    return height
            }
        }

        get area() {
            return this.width * this.height
        }

        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
        }

    }

    let c = new Circle(5);
    console.log(c.area); // 78.53981633974483
    console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

    let r = new Rectangle(3, 4, 'mm');
    console.log(r.area); // 1200 
    console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

    r.changeUnits('cm');
    console.log(r.area); // 12
    console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

    c.changeUnits('mm');
    console.log(c.area); // 7853.981633974483
    console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50


    return {
        Figure,
        Circle,
        Rectangle
    }

}
classHierarchy()