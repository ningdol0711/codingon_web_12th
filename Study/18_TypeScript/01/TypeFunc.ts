// 선택적 매개변수는 맨 뒤에 있어야 함
function print(a: number, b?: number, c = 100) {
  console.log(a);
  console.log(b);
  console.log(c);
}

print(3, 5, 2);
print(3, 5);
print(5);

function sayHello(): string {
  return "Hi!";
}

console.log(sayHello());

// Arrow Function
const square = (x: number, y: number): number => {return x*y};

// interface 정의시 함수 타입 표현
interface Greet {
  name: string,
  hi(): string,
  bye(e: number): string,
}

const codingon: Greet = {
  name: "name",
  hi() {return "나는 " + this.name + "이다"},
  bye(a: number) {return "작별인사를 " + a + "번 했습니다."},
}

console.log(codingon.hi());
console.log(codingon.bye(3));

// naver : 함수의 끝에 도달하지 않는 경우
function goingon(): never {
  while(true) {
    console.log("go");
  }
}

