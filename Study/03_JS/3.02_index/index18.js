// 객체 (object) : {}를 사용

// 객체 선언
// let user = {
//   name : "lee",
//   age : 20,
//   address : "강동구 상암로",
//   sayho : function() {  // 객체 내부에 함수 선언 가능
//     console.log("HOOOOOOOOOOOO");
//   }
// }

// // 객체 호출 방법 : DOT, []
// console.log(user.name);
// console.log(user["age"]);
// console.log(user.address);
// user.sayho(); // 함수는 []사용 불가

// let user2 = {
//   name : "LEE",
//   age : 20,
//   "Like birds?" : true,
// }
// alert(user2["Like birds?"]);

// // delete : 객체 요소 삭제
// delete user2["Like birds?"];
// console.log(user2);

// // 객체 요소 추가
// user2.isAdmin = true;
// console.log(user2)

// const user3 = { // const안의 변수값 변경 가능
//   name : "pan",
// }
// console.log(user3.name);
// user3.name = "peter"
// console.log(user3.name);

// let key = "ABC";
// let user4 = {
//   name : "jun",
//   age : "30",
// }
// console.log(user4);
// user4.key = true;
// console.log(user4);

// 계산된 프로퍼티
// let user5 = {
//   name : "Lee",
//   age : 20,
// }
// let what = prompt("사용자의 정보", "name");
// console.log(user5[what]);

// let fruits = prompt("어떤 과일?", "apple");
// let bag = {}; // 빈 객체 선언
// bag[fruits] = 5;
// console.log(bag);

// 아래 두 함수는 동일
// function makeuser(name, age, address) {
//   return {
//     name : name,
//     age : age,
//     address : address,
//   }
// }
function makeuser(name, age, address) {
  return {
    name,
    age,
    address,
  }
}
let user6 = new makeuser("han", 22, "상암로 11");
let user7 = new makeuser("seo", 22, "원주시");
console.log(user6);
console.log(user7);