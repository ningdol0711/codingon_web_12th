import './App.css';
import Student from './components/student';
import Pr1 from './components/Pr1';

function App() {
  const handleClick = (name: string, grade: number, score = 50) => {
    console.log(`Hi my name is ${name} and my grade is ${grade} also my score is ${score}`);
  }
  
  return (
    <div className="App">
      <Student name = '이준규' grade={2} handleClick={handleClick}/>
      <Student name='양희서' grade={3} part='실내인테리어' handleClick={handleClick}/>
      <Pr1 />
    </div>
  );
}

export default App;
