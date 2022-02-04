// we need to import the react and react-dom 
import React from 'react';
import ReactDOM from 'react-dom';

// render method is used to show the content on the webpage
// ReactDOM.render(what to show, where to show)
ReactDOM.render(
  <div>
    <h1>List of my favourite technologies : </h1>
    <ol>
      <li>Python</li>
      <li>Machine Learning</li>
      <li>Android app development</li>
      <li>Web development</li>
    </ol>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

