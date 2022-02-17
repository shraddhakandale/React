import React from 'react';
import './App.css';
import {Link, Route,Routes} from 'react-router-dom';
import About from './Components/About.js';
import Contact from './Components/Contact.js';
import Services from './Components/Services.js';
;


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <a href="/about">About</a>   here we are not using this to create link because it would reload the page*/}
      <Link to="/about">About</Link><br/>
      <Link to="/contact">Contact</Link> <br/>
      <Link to="/services">Services</Link>
      <Routes>
        {/* this is how we create the routes and we pass the props in routes */}
        <Route exact path="/about" element={<About name = "ABOUT"/>} />
        {/* this is simple route component */}
        <Route exact path="/contact" element={<Contact/>} />
        {/* this is how we create the routes and we pass the props in routes */}
        <Route exact path="/services" element={<Services name="SERVICES"/>}/>
      </Routes>
    </div>
  );
}

export default App;
