const fs = require('fs');
fs.readFile('./blog.txt',(err, data) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log(data.toString());
  }
})