let addnum = 0;
let subnum = 0;
let increase = setInterval(function() {
  addnum++;
  console.log("addnum++ ", addnum);
}, 1000)

let decrease = setInterval(function() {
  subnum--;
  console.log("subnum-- ",subnum);
}, 1000)