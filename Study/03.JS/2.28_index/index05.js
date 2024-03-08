// value vs reference

let x = 10;
let y = x;
console.log(x, y);

let a = {value : 10}
let b = a;
console.log(b);

a.value = 20;
console.log(a, b);