// function greeting(surname, lastname="unknown") { // default 값 지정
//   console.log("Wellcome %s %s", surname, lastname);
// }
// greeting("lee");
// greeting("lee", "jungue");
// console.log("\n");

// function sum(a, b) {
//   return a+b;
// }
// let result1 = sum(1, 2);
// console.log(result1);
// let result2 = sum(1, 2, 3);
// console.log(result2);

// function sum() {
//   console.log(arguments); // 자동으로 파라메터의 갯수를 지정한다.
//   let total = 0;
//   for(let value of arguments) {
//     total += value;
//   }
//   return total;
// }
// let result = sum(1, 2, 3, 4);
// console.log(result);

// rest operation(최대 갯수가 정해지지 않았을 때 ...변수명, 항상 마지막에 위치해야 한다.)
// function addAll(a, b,...args) {
//   console.log(a,b);
//   console.log(args);
// }
// addAll(1, 2, 3, 4, 5, 6);