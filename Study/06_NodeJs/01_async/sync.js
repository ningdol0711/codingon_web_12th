// sync 방식으로 파일을 읽어들입니다.
const fs = require("fs");
const data1 = fs.readFileSync('file1.txt','utf-8');
console.log(data1);
const data2 = fs.readFileSync('file2.txt','utf-8');
console.log(data2);
const data3 = fs.readFileSync('file3.txt','utf-8');
console.log(data3);