// console.log('start');

// async function displayCommits() {
//   const user = await getUser(1);
//   const repos = await getRepo(user.githubUsername);
//   const commit = await getCommit(repos[0]);
//   console.log(commit);
// }
// displayCommits();

// console.log('end');

console.log('start');

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepo(user.githubUsername);
    const commit = await getCommit(repos[0]);
    console.log(commit);
  } 
  catch (error) {
    console.log('Error', error.message);
  }
}
displayCommits();

console.log('end');

function getUser(id) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Reading a user from db');
      res({id:id, githubUsername:'Lee'});
    }, 1000)
  })
}

function getRepo(username) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('github API...');
      res(['repo1', 'repo2', 'repo3']);
    }, 1000)
  })
}

function getCommit(repo) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Commits');
      res(['commit']);
    }, 1000)
  })
}