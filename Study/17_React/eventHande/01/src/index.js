import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import FuncCount from './Counter';
import HandlerEx1 from './HandlerEx';
import HandlerEx2 from './HandlerEx2';
import HandlerEx3 from './HandlerEx3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SyntheticEvent />
    <hr />
    <ClassBind />
    <hr />
    <FuncCount />
    <hr />
    <HandlerEx1 />
    <hr />
    <HandlerEx2 />
    <hr />
    <HandlerEx3 />
  </React.StrictMode>
);
