function call(name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('call');
      console.log(name + '반가워');
      res();
    },1000)
  })
}

function back() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('back');
      console.log('back 을 실행했구나');
      res();
    },1000)
  })
}

function hell() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('여기는 callback 헬');
      res();
    },1000)
  })
}

call('Lee').then(() => {
  return back();
}).then(() => {
  return hell();
})