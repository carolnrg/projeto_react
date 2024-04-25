import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Relogio from './Relogio';
import Letreiro from './Letreiro';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Relogio />
    <Letreiro />
  </>
);


