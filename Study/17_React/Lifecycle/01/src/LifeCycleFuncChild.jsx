import { useEffect, useState } from "react";

function LifeCycleFuncChild({ Number }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    console.log("컴포넌트 마운트");
  }, []);

  useEffect(() => {
    console.log("컴포넌트 마운트, 업데이트");
  }, [Number]);

  useEffect(() => {
    return () => {
      console.log("컴포넌트 언마운트");
    };
  }, []);

  // input 상태 업데이트 될때
  useEffect(() => {
    console.log("input mount, update");
  }, [input]);

  return (
    <div>
      <p>현재 number값 : {Number}</p>
      <input type="text" value={input} onChange={(e) => {setInput(e.target.value)}}/>
    </div>
  );
}

export default LifeCycleFuncChild;
