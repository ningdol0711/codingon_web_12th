// Date() : 내장 함수이면서 객체

let now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth()+1); // 달은 0부터 시작
console.log(now.getDate()); // 일은 1부터 시작
console.log(now.getDay()); // 0 = 일요일 ~ 6 = 토요일

// random()
let rand = Math.floor(Math.random() * 100) + 1; // 1~100 사이의 랜덤값
console.log(rand);

// var과 function은 코드를 실행할때 먼저 처리하기 때문에 선언하기 전에 사용이 가능하다.
var red = "red"; // 전역 변수
let blue = "blue"; // 지역 변수

function sayhi() {
  console.log("hiiiiiiiiiiii");
}