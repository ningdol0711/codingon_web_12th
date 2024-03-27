function Circle(radius) {
  this.radius = radius;
  this.draw = () => {
    console.log('*');
  }
}

const c = new Circle(1);
console.log(c);
c.draw();
// 위의 코드를 class로

class Circle1 {
  constructor(radius) {
    this.radius = radius;
  }
  draw() {
    console.log('*');
  }
}
const d = new Circle1(1);
console.log(d);
d.draw();