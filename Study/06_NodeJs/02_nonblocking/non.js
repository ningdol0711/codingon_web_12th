const fs = require('fs');
fs.readFile('./blog.txt', 'utf-8', (err,data)=>{
  if(err) throw err;
  console.log(data);
});
console.log('working');