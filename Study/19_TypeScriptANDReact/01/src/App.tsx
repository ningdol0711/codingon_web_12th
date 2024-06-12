import './App.css';
import Student from './components/student';

function App() {
  return (
    <div className="App">
      <Student name = '이준규' grade={2}/>
      <Student name='양희서' grade={3} part='실내인테리어'/>
    </div>
  );
}

export default App;
