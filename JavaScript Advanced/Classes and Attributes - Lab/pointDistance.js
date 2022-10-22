class Point {
    constructor(x, y) {
      this.x = x
      this.y = y
    }
    static distance(p1, p2) {
      let xOneXTwo = (p1.x - p2.x) ** 2
      let yOneYTwo = (p1.y - p2.y) ** 2
      let result = Math.sqrt(xOneXTwo + yOneYTwo)
      return result
    }
  }