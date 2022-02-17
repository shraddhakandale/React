import React from 'react';
import './App.css';
import {Link, Route,Routes} from 'react-router-dom';
import About from './Components/About.js';
import Contact from './Components/Contact.js';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Link to="/about">About</Link><br/>
      <Link to="/contact">Contact</Link>
      <Routes>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
