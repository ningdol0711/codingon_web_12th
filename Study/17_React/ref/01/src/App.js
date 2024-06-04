import './App.css';
import FuncRef1 from './FuncRef1';
import Pr1 from './Pr1';
import Pr2 from './Pr2';
import RefConst from './RefConst';
import RefSample2 from './RefSample2';

function App() {
  return (
    <div className="App">
      <RefSample2 />
      <hr />
      <Pr1 />
      <hr />
      <FuncRef1 />
      <hr />
      <RefConst />
      <hr />
      <Pr2 />
    </div>
  );
}

export default App;
