// 내장 함수

// Math : 숫자와 관련된 함수
// console.log(Math.random()); // 0 ~ 1 사이의 임의값을 가져온다.
// console.log(Math.round(3.9)); // 반올림 반내림
// console.log(Math.max(1,5,4)); // 주어진 값 중 가장 큰 값 선택
// console.log(Math.min(1,5,4)); // 주어진 값 중 가장 작은 값 선택


// 문자열 관련 함수
// let msg = "This is my first message";
// let result1 = msg.includes('my'); // true
// let result2 = msg.includes('your'); //false
// let result3 = msg.startsWith('This');// true
// let result4 = msg.startsWith('this');//false
// let result5 = msg.endsWith('e'); // true
// let result6 = msg.indexOf('my'); // 8
// let result7 = msg.replace('first', 'second');
// let result8 = msg.toUpperCase();

// console.log(result1, result2, result3, result4);
// console.log(result5, result6, result7, result8);

// let str = "  This is my first message   ";
// let result1 = str.toLowerCase();
// let result2 = str.trim();        // 시작과 끝 공백 지우기
// let result3 = str.trimStart();   // 시작 공백 지우기
// let result4 = str.trimEnd();     // 끝 공백 지우기
// let result5 = str.split(" ");    
// let result6 = str.split("");     

// console.log(result1); console.log(result2); console.log(result3);
// console.log(result4); console.log(result5); console.log(result6);

const msg1 = "this is \' my first message";
const msg2 = "this is \n my first message";
console.log(msg1);
console.log(msg2);