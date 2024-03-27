class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getArea() {
    return this.x*this.y;
  }
}

const ret1 = new Shape(3, 4);
console.log(ret1.getArea());

class Rectangle extends Shape {
  getSqrt() {
    return Math.sqrt(this.x, this.y);
  }
}

class Tri extends Shape {
  getArea() {
    return (this.x*this.y)%2;
  }
}