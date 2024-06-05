import { useState } from "react";
import "./App.css";
import PostsList from "./Pr1Child";

function Pr1() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {});
    setPosts(res.data.slice(0,10));
  }
  getPosts();

  return (
    <div className="postBox">
      <h2 className="listBox">Post list</h2>
      <PostsList fakePosts={posts} />
    </div>
  );
}

export default Pr1;
