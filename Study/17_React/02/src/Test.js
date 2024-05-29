import './App.css'

function App() {
  const a = 20;
  const b = 10;
  const user = {name: "Lee", Age: 21};
  const mystyle = {
    backgroundColor: "lightblue",
    color: "violet"
  }

  return ( 
    <div className="App">
      {3+5}
      <p> <span>Span</span> </p>
      <p className='title'>{"문자열허용"}</p>
      <p>{a>b && "true"}</p>
      <p>{Math.floor(Math.random()*10)}</p>
      <p>{user.name}</p>

      <div style={mystyle}>
        ID: <input type="text" /> <br />
        PW: <input type="password"></input>
      </div>

      <div style={{backgroundColor: "lightblue", color: "violet"}}>
        ID: <input type="text" /> <br />
        PW: <input type="password"></input>
      </div>
    </div>
   );
}

export default App;
