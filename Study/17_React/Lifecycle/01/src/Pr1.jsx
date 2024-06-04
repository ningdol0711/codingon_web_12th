import "./App.css";
import PostsList from "./Pr1Child";

function Pr1() {
  let fakePosts;
  
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => fakePosts = json);

  console.log(fakePosts)

  return (
    <div className="postBox">
      <h2 className="listBox">Post list</h2>
      <PostsList fakePosts={JSON.stringify(fakePosts)} />
    </div>
  );
}

export default Pr1;
