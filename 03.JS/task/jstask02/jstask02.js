// 1
// for(let i = 0;i<=10000;i++) {
//   if(i%13==0 && i%2==1) {
//     console.log(i);
//   }
// }

// 1 심화
// let num = prompt("숫자를 입력하세요.");
// for(let i = 0;i<=num;i++) {
//   if(i%13==0 && i%2==1) {
//     console.log(i);
//   }
// }

// 2
// let mathscore = prompt("수학 성적을 입력하세요.");
// let engscore = prompt("영어 성적을 입력하세요.");
// let avg = (Number(mathscore) + Number(engscore)) / 2;
// console.log(avg);

// 3
// let mathscore = "77";
// let engscore = "88";
// let avg = (Number(mathscore) + Number(engscore)) / 2;
// console.log(avg);

// 4
// function multifly
// function multifly(x, y) {
//   return x * y;
// }
// console.log(multifly(7, 3));

// 5
// function square(x) {
//   return x *= x;
// }
// console.log(square(5));

// 6
// let age = prompt("나이를 입력해 주세요.");
// if(age >= 0 && age <= 7) {
//   console.log("유아");
// }
// else if(age >= 8 && age <= 13) {
//   console.log("초등학생");
// }
// else if(age >= 14 && age <= 16) {
//   console.log("중학생");
// }
// else if(age >= 17 && age <= 19) {
//   console.log("고등학생");
// }
// else if(age >= 20) {
//   console.log("성인");
// }
// else {
//   console.log("잘못 입력하셨습니다.");
// }

// 7
function sum() {
  let result = 0;
  for(let i = 0;i<=100;i++) {
    if(i%2==0 || i%5==0) {
      result += i;
    }
  }
  return result;
}
console.log(sum());