// generic : 선언할 때 타입을 지정하기 어려운경우 -데이터 타입을 외부에서 지정, 생성 시점에 타입을 명시
// <T> 형태로 주로 사용한다.

function numArray(arr: number[]): number {
  return arr.length;
}

// <T>를 이용하여 매개변수를 선언하는 공간을 하나 더 만든다.
// Type만 들어올 수 있는 공간
function ArrayLen<T>(arr: T[]): number {
  return arr.length;
}
console.log(ArrayLen<number>([1, 2, 3, 4, 5, 6, 7]));
console.log(ArrayLen<number | string>(['1', '2', '3', '4']));

function printSome<T>(x: T, y: T) {
  console.log(x, y);
}
printSome<string>('Hi', 'Hello');
printSome<number>(100, 200);
printSome<boolean[]>([true, false], [false, false]);

function printSome2<T, U>(x: T, y: U) {
  console.log(x, y);
}
printSome2<string, number>('I Love You', 3000);

// interface & Generic
interface Phone<T> {
  company: string,
  createdAt: Date,
  option: T,
}

type iphoneOption = {
  color: string,
  storage: number,
}

const iphone15: Phone<iphoneOption> = {
  company: "Apple",
  createdAt: new Date(),
  option: {
    color: "white",
    storage: 512,
  },
}

type galaxyOption = {
  color: string,
  isBuz: boolean,
}

const galaxyS24: Phone<galaxyOption> = {
  company: "Samsung",
  createdAt: new Date(),
  option: {
    color: "white",
    isBuz: true,
  }
}