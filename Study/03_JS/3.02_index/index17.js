// 함수 default 값 지정

// function bank(deposit, rate, year){
//   return deposit*rate / 100*year;
// }
// console.log(bank(1000, 3.5, 5));
// console.log(bank(1000, 3.5,)); // 값이 제대로 주어지지 않으면 NaN값이 반환된다.

// function bank(deposit, rate=3, year=3){ // default값 지정
//   return deposit*rate / 100*year;
// }
// console.log(bank(1000, 3.5, 5));
// console.log(bank(1000, 3.5,));  // 값을 전부 입력하지 않으면 default값으로 계산한다.

// function printall(...args) {  // 나머지 연산자를 통해 갯수를 지정하지 않아도 값을 받을 수 있다.
//   // for(let i = 0;i<args.length;i++) {
//   //   console.log(args[i]);
//   // }

//   for(let value of args) {
//     console.log("%s", value);
//   }
// }
// printall("HTML", "CSS", "JS");
// printall("HTML", "CSS", "JS", "node.js");

// for(let i=5;i>0;i--) {
//   for(let j=0;j<i;j++) {
//   document.write("✨");
//   }
//   document.write("<br>"); // HTML문법 사용 (\n안됨)
// }

// 자동 실행 함수
// 형식 : ()();
// (function() {
//   console.log("자동 실행");
// })()

// 자동 함수에 매개변수 주는 법
(function(a, b) {
  console.log("자동 실행", a, b);
})(1, 2);