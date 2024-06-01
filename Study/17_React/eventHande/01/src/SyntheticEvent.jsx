import "./App.css"

export default function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log("Synthetic Event Click");
    console.log(e);
    // React가 DOM이 아닌 Virtual DOM을 사용하는 것처럼 웹 브라우저의 NativeEvnet가 아닌, 이것을 감싸고 있는 합성 이벤트를 사용한다.
  }

  function printInput(e) {
    console.log(e.target.value);
  }

  return (
    <div className="App">
      <button onClick={syntheticEvent}>Synthetic Event</button> {/* onClick Event */}
      <hr />
      <input type="text" onChange={printInput}/> {/* onChange Event */}
    </div>
  )
}