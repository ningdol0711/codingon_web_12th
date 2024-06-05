import './App.css';
import UseCallBack from './components/useCallBack';
import UseCallBack2 from './components/useCallBack2';
import UseMenoFunc from './components/useMemo';

function App() {
  return (
    <div className="App">
      <UseMenoFunc />
      <UseCallBack />
      <UseCallBack2 />
    </div>
  );
}

export default App;
