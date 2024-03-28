class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getArea() {
    console.log(this.x*this.y);
  }
  move() {
    console.log('move');
  }
}

class Circle extends Shape{
  constructor(x, y) {
    super(x, y);
  }
  move() {
    console.log('move > circle');
  }
}

const move = new Circle();
move.move();

const ret1 = new Shape(3, 4);
ret1.getArea();

class Rectangle extends Shape {
  getSqrt() {
    return Math.sqrt(this.x, this.y);
  }
}

const rectangle1 = new Rectangle(10, 4);
console.log(rectangle1.getSqrt());

class Tri extends Shape {
  getArea() {
    return (this.x*this.y)%2;
  }
}

class Cir extends Shape {
  get
}