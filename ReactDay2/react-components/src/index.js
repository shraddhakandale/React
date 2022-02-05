// create two new components in src folder
import React from 'react';
import ReactDOM from 'react-dom';
// import two components
// import Heading from './Headingfunctioncomponent';
// import List from './Listfunctioncomponent';
import App from './App';

ReactDOM.render(
  <div>
      {/* we are including components */}
      {/* <Heading/>
      <List/> */}

      {/*now instead of adding all components in index.js file we can add all components to app component and include it in index.js file*/}
      <App/>
  </div>,
  document.getElementById('root')
);
