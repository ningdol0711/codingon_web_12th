// datatype
// true, false 확인하기
console.log(true == 1);
console.log(false == 1);

let big = 9999999;
console.log(big);

let big2 = 9999999999999999;
console.log(big2);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

// Boolean : 참 혹은 거짓 반환
console.log(10>1);
console.log(10<1);

// null
let nullvalue = null;
console.log(nullvalue);
let nothing;
console.log(nothing); // undefined

//symbol : 변수명을 비교
const a1 = '1';
const a2 = '1';
console.log(a1==a2);

const b1 = Symbol('1');
const b2 = Symbol('2');
console.log(b1==b2);

// bigInt
// data type을 알수있는 함수 : typeof

let num = 2353564523n;
console.log(typeof(num));

let surname = "Lee";
console.log(typeof(surname));

let age = 22;
console.log(typeof(age));

let ismale = 22;
console.log(typeof(ismale));

let undefined1;
console.log(typeof(undefined1));

let selectFont = null;
console.log(typeof(selectFont));

// infinity
let x = Infinity;
let y = -Infinity;
console.log(x, y, typeof(x), typeof(y));