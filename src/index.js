import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'hello sammi'
const el = (
  <div>
    <h1 className='greeting'>Text {text}</h1>
    <input type="text"/>
    <button>Click</button>
  </div>
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(el);



