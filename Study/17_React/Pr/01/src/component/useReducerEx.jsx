import { useReducer } from "react";

function UseReducer() {
  // dispatch : 액션(state가 어떻게 변해야 하는지에 대한 힌트)을 발생시키는 함수
  // state : 현재 상태
  // useReducer : [state, dispatch]를 리턴함

  const increment = () => {dispatch('increment')};
  const decrement = () => {dispatch('decrement')};
  const reset = () => {dispatch('reset')};

  const initState = {value: 0}; //초기 상태값

  const reducer = (prevState, action) => {
    console.log(action)
    switch(action) {
      case 'increment' : {
        // return prevState + 1;
        return {value: prevState.value + 1}
      }
      case 'decrement' : {
        return {value: prevState.value - 1}
      }
      case 'reset' : {
        return {value: 0}
      }
      default : {
        return prevState;
      }
    }
  }

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h1>useReducer</h1>
      <h2>{state.value}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default UseReducer;
