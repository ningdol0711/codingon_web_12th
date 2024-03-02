// 객체 선언 방법 3가지

// 1.
let person1 = new Object();
person1.name = "mike";
person1.age = 36;
person1.sayhi = function() {
  console.log(`Hello ${this.name}`);
}
console.log(person1);

// 2. 리터럴
let person2 = {
  name : "chris",
  age : 28,
  sayhi : function() {
    console.log(`Hello ${this.name}`);
  }
}
console.log(person2);

// 3. 함수 사용
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayhi = function() {
    console.log(`Hello ${this.name}`);
  }
}
let person3 = new Person("willy", 28);
console.log(person3);

// 배열 안 객체
let student = [
  {name : "철수", score : 90},
  {name : "영희", score : 80},
  {name : "민수", score : 70},
  {name : "형준", score : 60},
]
for(let i=0;i<student.length;i++) {
  console.log(student[i]["score"]);
}