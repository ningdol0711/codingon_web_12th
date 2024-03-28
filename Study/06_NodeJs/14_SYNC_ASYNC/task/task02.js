// function call(name) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log('call');
//       console.log(name + '반가워');
//       res();
//     },1000)
//   })
// }

// function back() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log('back');
//       console.log('back 을 실행했구나');
//       res();
//     },1000)
//   })
// }

// function hell() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       console.log('여기는 callback 헬');
//       res();
//     },1000)
//   })
// }

// async function exec() {
//   await call('Lee');
//   await back();
//   await hell();
// }

// exec();

function call(name, cb) {
  setTimeout(function () {
      console.log(name);
      cb(name);
  }, 1000);
}
function back(cb) {
  setTimeout(function () {
      console.log('back');
      cb('back');
  }, 1000);
}
function hell(cb) {
  setTimeout(function () {
      cb('callback hell');
  }, 1000);
}

call('Lee',(name) => {
  console.log(name + "반가워");
  back((txt) => {
    console.log(txt + "을 실행했구나");
    hell((message) => {
      console.log("여기는" + message);
    })
  })
})