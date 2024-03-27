// 배열 구조분해
const arr1 = [1,2,3,4,5];
const arr2 = ['&','!','*','#','$'];

const [one, two, three, four, five] = arr1;
console.log(one);
console.log(two);

const [a1, a2, a3, a4, a5] = arr2;
console.log(a3);
console.log(a1);

const list = ['orange', 'apple'];
const [x, y, alpha = 'pineapple'] = list;
console.log(alpha);

// 두 변수의 값을 교환
let num1 = 10;
let num2 = 20;

[num1, num2] = [num2, num1];
console.log(num1, num2);

// 객체
// 객체명 {}
// key, value쌍으로 구성

const obj = {
  title : '3 body problem',
  star : '5',
  content : '호오... 흥미롭군요....',
};
console.log(obj.content);
console.log(obj['star']);

const {title, s, c} = obj; // 키의 이름이 다르면 사용이 불가능하다.
console.log(title);
console.log(s);

const {content: c1, star: s1, title: t1} = obj; // 이름을 바꾸어 사용하는 경우(key의 이름을 따라가기 때문에 순서가 상관없다.)
console.log(s1,t1,c1);

const info = {
  name: 'full stack',
  time: '09:00 ~ 14:00',
  content: '살려줘....',
};

function getInfo(x) {
  const {name, time, content} = x;
  const output = `${name}강의 시간은 ${time}입니다. ${content}`;
  return output;
};

console.log(getInfo(info));

// && : and 연산자
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

// || : or 연산자
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// spread 연산자 : 배열, 객체, 문자열과 같이 반복이 가능한 문자를 0개 이상의 인수 또는 요소로 확장해주는 연산자.
const a = [1,2,3];
const b = [4,5,6];
const result1 = [...a, ...b]; // 배열 합치기
console.log(result1);

const str = 'hello';
console.log(str);
console.log(...str);
console.log(str.split(''));
console.log(str.split(' '));

const chip = {
  base: 'chip',
  company: 'samsung',
}
const spreatics = {
  ...chip, // 객체 내부에 다른 객체 포함 시p키기
  address: '마포구',
}
console.log(spreatics);

// 클래스
// 기본 형식 첫글자는 대문자
// class Car {
//   constructor () {

//   }
//   method1() {}
//   method2() {}
//   method3() {}
// }

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`hi ${this.name}`);
//   }
// }

// const user1 = new User('potter');
// user1.sayHi();
// const user2 = new User('harry');
// user2.sayHi();

function User(name) { // funcion으로 만드는 class
  this.name = name;
}
User.prototype.sayHi = () => {
  console.log(this.name);
}

let user1 = new User('brus');
user1.sayHi();