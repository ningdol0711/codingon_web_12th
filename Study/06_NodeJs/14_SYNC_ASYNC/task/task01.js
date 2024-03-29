function call(name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('call');
      res(name);
    },1000)
  })
}

function back() {
  return new Promise((res, rej) => {
    setTimeout((txt) => {
      console.log(`back`);
      res('back');
    },1000)
  })
}

function hell() {
  return new Promise((res, rej) => {
    setTimeout((message) => {
      res('callback');
    },1000)
  })
}

call('Lee').then((name) => {console.log(`${name} 반가워!`);return back();}).then((txt) => {console.log(`${txt}을 실행했구나!`);return hell();}).then((message) => {console.log(`여기는 ${message} 헬`);})