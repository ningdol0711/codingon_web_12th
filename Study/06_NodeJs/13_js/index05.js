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

const house1 = new House(2024,'Dusan', 10);
house1.getAge();
console.log(house1.name);
house1.getWindow();