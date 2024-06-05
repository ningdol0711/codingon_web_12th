import { useCallback } from "react";
import { useState } from "react";

function UseCallBack() {
  const [text, setText] = useState("");

  // Before 
  // const onChangeText = (e) => {
  //   setText(e.target.value)
  // }

  // After
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, [])

  return ( 
    <div>
      <input type="text" onChange={onChangeText}/>
      <div>작성한 값 : {text || "없음"}</div>
    </div>
   );
}

export default UseCallBack;