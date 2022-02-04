// we need to import the react and react-dom 
import React from 'react';
import ReactDOM from 'react-dom';

var firstName = "Shraddha";
var lastName = "Kandale";
var currentYear = new Date().getFullYear();

// render method is used to show the content on the webpage
// ReactDOM.render(what to show, where to show)
ReactDOM.render( // javascript -> html -> javascript => jsx
  <div>
    <h1>Hello, welcome {firstName} {lastName}</h1>
    <h2>List of my favourite technologies : </h2>
    <ol>
      <li>Python</li>
      <li>Machine Learning</li>
      <li>Android app development</li>
      <li>Web development</li>
    </ol>
    <h2>Current year is { currentYear }</h2>
  </div>,
  document.getElementById('root')
);


