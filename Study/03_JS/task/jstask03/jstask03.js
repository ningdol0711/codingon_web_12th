let test = [
  {name : "철수", score : "90",},
  {name : "영희", score : "85",},
  {name : "민수", score : "70",},
  {name : "형준", score : "50",},
  {name : "기남", score : "68",},
  {name : "동희", score : "30",},
  {name : "미영", score : "60",},
];

for(let i=0;i<test.length;i++) {
  if(test[i]["score"] >= 60) {
    console.log(`${test[i].name}님은 합격입니다.`);
  }
}