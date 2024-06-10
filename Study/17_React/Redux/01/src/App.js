import {useState} from 'react';
import './App.css';

function App() {
  const [number, setnumber] = useState(100);
  const plus = () => setnumber(number + 1);
  const minus = () => setnumber(number - 1);

  return (
    <div className="App">
      <h1>Before Redux</h1>
      <Box1 number = {number} plus = {plus} minus = {minus}/>
    </div>
  );
}

const Box1 = ({number, plus, minus}) => {
  return (
    <div>
      Box1 : {number}
      <Box2 number = {number} plus = {plus} minus = {minus}/>
    </div>
  )
}
const Box2 = ({number, plus, minus}) => {
  return (
    <div>
      Box2 : {number}
      <Box3 number = {number} plus = {plus} minus = {minus}/>
    </div>
  )
}
const Box3 = ({number, plus, minus}) => {
  return (
    <div>
      Box3 : {number}
      <Box4 number = {number} plus = {plus} minus = {minus}/> 
    </div>
  )
}
const Box4 = ({number, plus, minus}) => {
  return (
    <div>
      Box4 : {number} <br />
      <button onClick={plus}>Plus</button> 
      <button onClick={minus}>Minus</button>
    </div>
  )
}

export default App;
