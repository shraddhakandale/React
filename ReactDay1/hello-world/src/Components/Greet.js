// this is our functional component

// first we have to import react and reactDOM

import React from 'react';
import ReactDOM from 'react-dom';

// function Greet(){
//     return <h1>Hello Shraddha</h1>;
// }

//recommended way of creating functional components 
const Greet = () => <h1>Hello Shraddha!</h1>;

// now we need to export components and this component needs to be imported in app.js file
// there are two ways of exporting component
// 1) Default way
export default Greet; 
// to catch the default export in app.js we can import with any name

// 2) Named export
// export const Greet = () => <h1>Hello Shraddha!</h1>;
// to catch the named export in app.js we have to import with the same name as the component name