import { useDispatch, useSelector } from "react-redux";

function App3() {
  // store에 있는 상태 가져오기
  const isVisible = useSelector((state) => {return state.isVisible});
  const dispatch = useDispatch();
  return ( 
    <div>App3
      <h2>isVisible의 값 : {isVisible ? "참" : "거짓"}</h2>
      <button onClick={() => dispatch({type: 'Change'})}>Change</button>
    </div>
   );
}

export default App3;