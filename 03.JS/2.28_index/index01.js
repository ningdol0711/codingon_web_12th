// 브라우저의 콘솔에 출력
console.log("이준규");
console.log(console);

// 시간 계산
console.time("lable");
console.timeEnd("lable");

// string subsitiution (문자 대용)
console.log("This is String %s", "saymyname");
console.log("This is numberic %i",22);
console.log("%c This is large red text", "color: red; font-weight: bold; font-size: 20px;");
console.table({name: "Lee", email: "wnsrb@naver.com"});

// 브라우저에 경고 표시가 나오게 됩니다.
function division(x,y){
  if(y==0){
    consol.warn("Y > 0");
  }
  return x -y;
}

division(2,-1);