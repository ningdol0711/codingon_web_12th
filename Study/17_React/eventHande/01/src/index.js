import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import FuncCount from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SyntheticEvent />
    <hr />
    <ClassBind />
    <hr />
    <FuncCount />
  </React.StrictMode>
);
