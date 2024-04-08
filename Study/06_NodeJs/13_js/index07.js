//callback function()
console.log('Before');

getUser(1, (user) => {
  console.log(user);
})

console.log('After');

function getUser(id, a) {
  setTimeout(() => {
    console.log('Reading Database');
    a({id: id, gitHubUsername: 'jun'});
  }, 2000);
}