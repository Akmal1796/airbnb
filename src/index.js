import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/components/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

                          /* Map method in javascript */
/* const arr = [1,2,3,4,5];

const squared = arr.map(number => {
    return Math.pow(number, 2);
});

const names = ['akmal', 'asna', 'asjadh'];

const upperCase = names.map(name => {
  return name[0].toUpperCase() + name.slice(1);
});


const pokeman = ["Bulbasaur", "Charmender", "Squirtle"];

const elements = pokeman.map(item => {
  return `<p>${item}</p>`;
}) */

/* console.log(elements);

console.log(squared);

console.log(upperCase);

console.log(arr);

console.log(names); */

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
