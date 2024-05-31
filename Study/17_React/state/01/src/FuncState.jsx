import { useState } from "react";

function FuncState() {
  const [message, setmessage] = useState("wellcome");
  // useState(초기값)
  // message : message 상태 => state변수
  // setmessage : message state 값을 바꾸는 함수

  const onClickEnter = () => {
    setmessage("Shut the FUCK Up");
  }

  const onClickLeave = () => {
    setmessage("Get the FUCK Out");
  }

  return ( 
    <div>
      <h1>{message}</h1>
      {/* 리엑트에서 함수를 호출 할 때에는 ()없이 호출
      JS문법으로 동작하기 때문에 JS에서 함수를 호출하는 방식으로 불러와야한다. */}
      <button onClick={onClickEnter}>IN</button>
      <button onClick={onClickLeave}>OUT</button>
    </div>
   );
}

export default FuncState;