import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ClassState from './ClassState';
import FuncState from './FuncState';
import Pr1 from './Pr1';
import Pr2 from './Pr2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ClassState />
    <FuncState />
    <hr />
    <Pr1 />
    <Pr2 />
  </React.StrictMode>
);
