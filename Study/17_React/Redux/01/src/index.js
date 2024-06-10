import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FuncComp from './FuchComp';
import ClassComp from './ClassComp';
import FoodProps from './food';
import BookComp from './book';
import ConsoleComp from './Console';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <FuncComp name="Codingon" />
    <FuncComp name="Codingon">Hi</FuncComp>
    <hr />
    <ClassComp name="Lee"/>
    <ClassComp />
    <hr />
    <FoodProps />
    <FoodProps food="noodle"/>
    <hr />
    <BookComp title="나의 하루는 4시 40분에 시작된다" author="김유진" price="13,500원" type="에세이"/>
    <hr /> */}
    <ConsoleComp text="This is Text" vaild={() => {console.log("Console message")}}/>
  </React.StrictMode>
);
