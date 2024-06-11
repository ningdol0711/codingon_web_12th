function sum(x: number, y: number) {
  console.log(x+y);
}

sum(5, 11);

function sum2(...args: number[]) {
  let sum = 0;
  for(let i=0;i<args.length;i++) {
    sum += args[i];
  }
  return sum;
}

console.log(sum2(1, 2, 3, 4, 10));
