import { useRef } from "react";

function FuncRef1() {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  }

  return ( 
    <div className="App">
      <h2>함수형 컴포넌트 Ref</h2>
      <input type="text" ref={inputRef}/>
      <button onClick={handleFocus}>Focus</button>
    </div>
   );
}

export default FuncRef1;