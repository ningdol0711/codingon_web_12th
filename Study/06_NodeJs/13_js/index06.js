// extends
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

class Apartment extends House {
  constructor(year, name, window, floor) { // 부모로부터 값을 받아도 선언은 해야한다.
    super(year, name, window);  // 부모로부터 값을 가져올때에는 super를 사용한다.
    this.floor = floor;
  }
  getFloor() {
    return `${this.year}년에 지어진 ${this.name} 아파트의 층수는 ${this.floor}층 입니다.`;
  }
  getAge() { // 부모요소와 같은 이름의 메소드가 있다면 오버라이드 된다(덮어쓰기)
    super.getAge();
    console.log(`지어진지 ${2024-this.year}년된 아파트는 총 ${this.floor}층 입니다.`);
  }
}

const apt1 = new Apartment(2024, '두산', 20, 37);
console.log(apt1.getFloor());
apt1.getAge();