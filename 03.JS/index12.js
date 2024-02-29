// 함수 선언, 함수 표현식

// 함수 선언
// function saymyname(){
//   console.log("simion dominic");
// }

// 함수 호출
// saymyname();

// 함수 표현식
// let sayHo = function() {
//   console.log("HOOOOOOO");
// }
// sayHo();

// console.log("--------------");
// let a = saymyname;
// let b = sayHo();

// 함수의 길이
function long() {
  console.log(long.length);
}
long(); // length : 0
long(1, 2); //length 0

function fn1(x) {
  console.log(x);
}
function fn2(x, y) {
  console.log(x, y);
}
console.log(fn1.length);
console.log(fn2.length);

// return
function add(x, y) {
  console.log(`주어진 값 : ${x}, ${y}`);
  return x+y;
}
let result = add(1, 2);
console.log(result);
console.log(add(3,4));