// 반복문
// for(초기값 ; 조건값 ; 증감값) { 실행문 }

// for(let i = 10;i>0;i--) {
//   console.log(i, '*');
// }

// for(let i = 1;i<=10;i++) {
//   if(i%2 != 0){
//     console.log(i);
//   }
// }

// for(let i = 0;i<=50;i++) {
//   if(i%3 == 0 && i != 0) {
//     console.log(i);
//   }
// }

// while
let num = 0;
// while(num < 5) {
//   console.log(num);
//   num++;
// }

// do ~ while
// do { }
// while()

// for ~ in
const colors = ["!", "@", "#"];
// for(let i in colors) {
//   console.log(i,colors[i]);
//   console.log("------");
// }

// for ~ of : 배열 안에 있는 값을 가져온다.
for(let color of colors) {
  console.log(color);
  console.log("------");
}