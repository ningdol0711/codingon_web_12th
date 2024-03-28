// callback pattern

console.log('before');

getUser(1, (user) => {
  console.log('User', user);
})

console.log('after');

function getUser(id, wxy) {
  setTimeout(() => {
    console.log('Reading Data...');
    wxy({id:id, githubUsername:'hong'}); // 가장 기초적인 callback함수의 형태
  }, 2000);
}