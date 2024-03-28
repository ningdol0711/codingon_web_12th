// promise
// const p = new Promise((res, rej) => {
//   // res(1);
//   rej(new Error('message'));
// })
// // p.then(result => console.log(result));
// p.catch(result => console.log(result));

// const p = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(1);
//   },2000)
// })
// p.then(result => console.log(result));

const p = new Promise((res, rej) => {
  setTimeout(() => {
    rej(new Error('Oh my god'));
  }, 2000);
})
p.then(result => console.log(result)).catch(err => console.log(err));