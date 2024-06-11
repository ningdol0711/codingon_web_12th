// tuple : 갯수와 형식이 정해져 있는 배열
let drink: [string, string] = ["콜라", "코카콜라"];
drink[0] = "coke";
drink.push("good");
console.log(drink);

let drink2: readonly [string, number] = ["coke", 2400];
// drink2.push("");
// drink2[0] = "콜라";

type productInfo = [number, string, number]; // Type 선언
let product1: productInfo = [100000, "로봇청소기", 13862]; // Type 사용

// Enum

enum Auth {
  admin = 0,
  user = 1,
  guest = 2,
}

enum Cafe {
  americano = "아메리카노",
  latte = "라떼",
}

enum Cake {
  choco = "초코",
  vanilla = "바닐라",
  strawberry = "딸딸기",
}

console.log(Auth.admin);
console.log(Cafe.latte);

// any : 모든 형식
let val: any;
val = true;
val = 20;
val = null;
val = "Hi";

// Interface
interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: "codingon",
  isPassed: true,
};

type Score = "A" | "B" | "C" | "D" | "E" | "F";
let score1: Score = "A";

type Score2 = 100 | 90 | 80 | 70 | 60;
let score2: Score2 = 90;

enum Score3 {
  'A+' = 100,
  'A' = 90,
  'B+' = 80,
  'B' = 70,
}

// interface 상속
interface baseballClub extends Student {
  position: string,
  tall: number,
  backNumber: number,
  [grade: number]: Score3,
}

let player1: baseballClub = {
  name: "otani",
  isPassed: true,
  position: "pitcher",
  tall: 190,
  backNumber: 17,
  1: Score3.A,
}

console.log(player1)

// 교차 타입 : 두개 이상의 타입을 합치는 것
interface toy {
  name: string,
  start(): void,
}
interface car {
  name: string,
  color: string,
  price: number,
}

type toycar = toy&car;

const ToyCar: toycar = {
  name: "bumblebee",
  start() {console.log("Let's Go!!!")},
  color: "blue",
  price: 5000
}