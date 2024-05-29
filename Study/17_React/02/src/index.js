import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Demo from './Demo';
// import Test from './Test';
import Promo from './Promo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Demo /> */}
    {/* <Test /> */}
    <Promo />
  </React.StrictMode>
);

reportWebVitals();
