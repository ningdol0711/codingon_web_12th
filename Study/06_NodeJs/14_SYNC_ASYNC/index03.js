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

// const p = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej(new Error('Oh my god'));
//   }, 2000);
// })
// p.then(result => console.log(result)).catch(err => console.log(err));

// return
// function callPromise(name) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(name);
//     }, 1000)
//   });
// }

// function backPromise() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('backPromise id back')
//     }, 2000)
//   })
// }

// function hellPromise() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res('hellcallback');
//     },2000)
//   })
// }

// callPromise('lee').then((name) => {
//   console.log(`어서오고 ${name}`);
//   return backPromise().then((txt) => {
//     console.log(`${txt}를 실행하였습니다.`);
//     return hellPromise().then((msg) => {
//       console.log(msg);
//     })
//   })
// })

// async, await 사용
// async function exec() {
//   const name = await callPromise('kim');
//   console.log(`${name} 방가`);
//   const txt = await backPromise();
//   console.log(`${txt}를 실행`)
//   const msg = await hellPromise();
//   console.log(msg);
// }
// exec();