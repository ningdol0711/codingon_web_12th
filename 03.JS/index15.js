// 배열에 사용하는 메소드

// push() : 맨 끝에 추가
// pop() : 맨 끝 제거
// unshift() : 맨 앞에 추가
// shift() : 맨 앞 제거
// splice(x, y, a, b) : x번째 인덱스부터 y개의 요소를 치환

// let arr1 = [1, 2, 3, 4, 5];
// console.log(arr1);
// arr1.push(7);
// console.log(arr1);
// arr1.pop();
// console.log(arr1);
// arr1.unshift(0);
// console.log(arr1);
// arr1.shift(0);
// console.log(arr1);

// console.log(arr1.splice(2, 2));
// console.log(arr1);
// console.log(arr1.splice(2, 3,'a','b'));
// console.log(arr1);

// let num1 = [10, 20, 30];
// console.log(num1);
// num1 = [];
// console.log(num1);

// let num2 = [10, 20, 30];
// console.log(num2);
// num2.length = 0;
// console.log(num2);

// forEach()
// let num3 = [10, 20, 30];
// num3.forEach(
//   function(item) {
//     console.log(item);
//   }
// )

// num3.forEach(i => console.log(i));
// num3.forEach((i, index) => console.log(i, index));

// concat : 두 배열 합치기(기존 배열 유지)
// let num4 = [1, 2, 3];
// let num5 = [4, 5, 6];
// let combined1 = num4.concat(num5);
// console.log(combined1);

// ... : 배열 합치기(기존 배열 유지)
// let combined2 = [...num4, ...num5];
// console.log(combined2);
// let combined3 = [...num4, 1, 2, ...num5];
// console.log(combined3);

// 배열 정렬
// let arr = [1, 2, 4, 5, 7, 11, 12, 31, 8, 3, 6, 9];
// console.log(arr.sort()); // 올림 차순(한 자릿 수)
// console.log(arr.reverse()); //내림 차순
// arr.sort((a, b) => {     // 올림 차순(두 자릿 수 이상)
//   return a > b ? 1 : -1;
//   }
// );
// console.log(arr);

// arr.reverse((a, b) => {     // 내림 차순(두 자릿 수 이상)
//   return a > b ? 1 : -1;
//   }
// );
// console.log(arr);

// 배열 합치기, 문자열 분리하기
// let arr2 = ['c', 'o', 'm'];
// console.log(arr2.join(''));
// let str = "test";
// console.log(str.split(''));