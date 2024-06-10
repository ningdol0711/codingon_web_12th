import { useDispatch, useSelector } from "react-redux";
import { minus, plus } from "./store/counterReducer";

function App2() {
  // store에 있는 상태 가져오기
  const number = useSelector((state) => {return state.counter.number});
  return ( 
    <div>App2
      <h1>{number}</h1>
      <Box1 />
    </div>
   );
}

const Box1 = () => {
  const number = useSelector((state) => {return state.counter.number});
  return (
    <div>
      Box1 : {number}
      <Box2 number = {number} />
    </div>
  )
}
const Box2 = () => {
  const number = useSelector((state) => {return state.counter.number});
  return (
    <div>
      Box2 : {number}
      <Box3 number = {number} />
    </div>
  )
}
const Box3 = () => {
  const number = useSelector((state) => {return state.counter.number});
  return (
    <div>
      Box3 : {number}
      <Box4 number = {number} /> 
    </div>
  )
}
const Box4 = () => {
  const number = useSelector((state) => {return state.counter.number});
  const dispatch = useDispatch();
  return (
    <div>
      Box4 : {number} <br />
      <button onClick={() => dispatch(plus)}>Plus</button> 
      <button onClick={() => dispatch(minus)}>Minus</button>
    </div>
  )
}

export default App2;