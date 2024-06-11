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
  name: string,
  isPassed: boolean,
}

const student1: Student = {
  name: "codingon",
  isPassed: true,
}