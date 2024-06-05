// import { useState } from 'react';
import './App.css';
import HookPr1 from './component/HookPr1';
import HookPr2 from './component/HookPr2';
// import SelectorComp from './Selector';
// import TextInput from './TextInput';
// import SelectImg from './img';
// import TextBox from './Text';

function App() {
  // const [selectedImg, imgValue] = useState("");
  // const [selectedText, textValue] = useState("");
  // const [selectedTextBack, textBackValue] = useState("");
  // const [selectedTextColor, textColorValue] = useState("");

  // function imgChange(event) {
  //   imgValue(event.target.value);
  // } 

  // function textChange(event) {
  //   textValue(event.target.value);
  // }

  // function textBackChange(event) {
  //   textBackValue(event.target.value);
  // }

  // function textColorChange(event) {
  //   textColorValue(event.target.value);
  // }

  return (
    <div className="App">
      {/* <SelectorComp Name = "Furit" items = {["Peach", "Apple", "Banana"]} onChange = {imgChange}/>
      <SelectorComp Name = "BackgroundColor" items = {["Red", "Green", "Blue"]} onChange = {textBackChange}/>
      <SelectorComp Name = "Color" items = {["Red", "Green", "Blue"]} onChange = {textColorChange}/>
      <TextInput textChange={textChange}/>
      <SelectImg selectedValue = {selectedImg}/>
      <TextBox selectedText={selectedText} selectedTextBack={selectedTextBack} selectedTextColor={selectedTextColor}/> */}
      <HookPr1 />
      <hr />
      <HookPr2 />
    </div>
  );
}

export default App;
