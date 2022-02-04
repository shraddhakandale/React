import React from 'react';
import ReactDOM from 'react-dom';

// in this file we have created list and we are giving styling to it.
// for styling wr are using attributes and properties
// first we have created a stylesheet "index-style.css" in public folder and added class "color" in it
// then we included that css file in "index.html" in head tag

ReactDOM.render(
  <div>
    <h1 className = 'color' contentEditable="true">Favourite Food List</h1>
    <ul>
      <li>Pizza</li>
      <li>Burger</li>
      <li>Cold-Coffee</li>
    </ul>
  </div>,document.getElementById('root')
);