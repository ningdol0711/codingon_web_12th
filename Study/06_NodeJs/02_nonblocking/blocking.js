const fs = require('fs');
const data = fs.readFileSync('./blog.txt', 'utf-8');
console.log(data);
console.log('working');