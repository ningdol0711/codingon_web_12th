// 1. class name : home
// 2. attribute : year, name, window count
// 3. method : print window count, name

class House {
  constructor(year, name, windowCnt) {
    this.year = year;
    this.name = name;
    this.windowCnt = windowCnt;
  }
  getAge() {
    console.log(`This house called ${this.name} built in ${this.year}`);
  }
  getWindow() {
    console.log(`This house has ${this.windowCnt} windows`);
  }
}

const apart = new House(2024,'Dusan', 10);
console.log(apart.name);
apart.getAge();
apart.getWindow();