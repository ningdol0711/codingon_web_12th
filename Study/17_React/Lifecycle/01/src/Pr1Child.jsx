import './App.css'

import { useEffect, useState } from "react";

function PostsList({fakePosts}) {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const time = setTimeout(() => {
      setPosts(fakePosts);
    }, 2000);
    return () => {clearTimeout(time)}
  }, [])

  useEffect(() => {

  }, [posts])

  console.log(posts);

  return ( 
    <div>
      {posts === undefined ? <div>Loading...</div> : posts.map((e) => {
        return (
          <div key={e.id} className='postItemContainer'>
            <div className="postTitle"><span className="postId">No.{e.id}</span>-{e.title}</div>
            <p>{e.body}</p>
          </div>
        )
      })}
    </div>
   );
}

export default PostsList;