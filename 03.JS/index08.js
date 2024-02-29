// 연산자

// 산술연산자 : + - * / %
console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%10);

console.log("----------------------");
// 관계연산자 : < > <= >= == !=
console.log(1<2);
console.log(1>2);
console.log(1<=2);
console.log(1>=2);
console.log(1==2);    // 값 비교
console.log(1!=2);
console.log('1'===1); // 값과 데이터 형식 비교
console.log('1'!==1);

console.log("----------------------");
// 논리연산자
console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);

console.log(true&&true);
console.log(true&&false);
console.log(false&&false);

console.log(true||true);
console.log(true||false);
console.log(false||false);

console.log("----------------------");
// 증감연산자
let num1 = 10;
console.log(++num1);
console.log(--num1);
console.log(num1+=10);

console.log("----------------------");
// falsy : 특정값을 제외한 값을 선택할 때
console.log(false||true);
console.log(false||"LEE");

let usercolor = "red";
// let usercolor = undefined;
let defaultcolor = "blue";
let currentcolor = defaultcolor||usercolor;
console.log("현재 색상 : ", currentcolor);