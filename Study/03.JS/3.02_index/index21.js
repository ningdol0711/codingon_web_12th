// 배열에 사용되는 메소드

// filter() : 자동 반복
// let arr1 = [3, 6, 1, 2, 9, 8, 4];
// arr1 = arr1.filter(function(num) {
//   return num > 3;
// })
// console.log(arr1);

// let arr2 = ["apple", "pineapple", "grape", "banana"];
// arr2 = arr2.filter(function(fruit) {
//   return fruit.length >= 6;
// })
// console.log(arr2);

// find()
// let arr3 = [10, 20, 30, 40];
// let result = arr3.find(function(num) {
//   return num > 30;
// });
// console.log(result);

// map() : 새로운 배열을 만들어 반환
// let arr4 = [1, -2, 3, -4, 5];
// let printarr = arr4.filter(item => item > 0).map(item => "<li>" + item + "</li>");
// console.log(printarr);
// document.write(printarr);

//every() : 배열의 모든 값이 조건을 만족하는지 확인
// const arr5 = [1, 2, -3];
// let result1 = arr5.every(function(item) {
//   return item >= 0;
// })
// console.log(result1);

//reduce(합계를 갖는 변수, 현재값)
// let arr6 = [1, 3, 4, 7];
// let result2 = arr6.reduce(function(acc, current){
//   return acc + current;
// }, 0) // acc의 시작값 지정
// console.log(result2);

// 동일 자연수 갯수 구하기
const number = [1, 3, 5, 1, 1, 5];
function count(array, search) {
  let result3 = array.filter(item => item == search);
  return result3.length
}
console.log(count(number, 1));