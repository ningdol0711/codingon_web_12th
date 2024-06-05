import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";

function UseCallBack2({ postId }) {
  const [post, setPost] = useState({});

  const getPost = useCallback(async () => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    setPost(res.data);
  }, [postId]);

  // useEffect 의존성 배열에 함수를 넣게 되면 컴포넌트가 리렌더링 -> 함수 재생성 (주소값 변경) -> getPost 호출
  useEffect(() => {
    getPost();
  }, [getPost]);

  return (
    <div>
      <h1>{post.id ? post.title : "Loading..."}</h1>
    </div>
  );
}

export default UseCallBack2;
