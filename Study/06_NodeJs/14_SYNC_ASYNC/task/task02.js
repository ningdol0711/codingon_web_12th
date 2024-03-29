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
    setTimeout(() => {
      console.log('back');
      res('back');
    },1000)
  })
}

function hell() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res('callback');
    },1000)
  })
}

async function exec() {
  const name = await call('Lee');
  console.log(name + ' 반가워!');
  const txt = await back();
  console.log(txt + '을 실행했구나!');
  const message = await hell();
  console.log(`여기는 ${message} 지옥...`);
}

exec();