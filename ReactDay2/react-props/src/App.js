import React from 'react';
import './App.css';
import Card from './Card.js';
import Cardadvance from './Cardadvance.js';
import celebrityList from './Celebrities';

// this function is for mapping
function insertCard(celebrityList){
  return <Cardadvance
    key = {celebrityList.id} // here the key attribute is for unique card generation ...this is not printing.
    name = {celebrityList.name}
    source = {celebrityList.source}
    email = {celebrityList.email}
  />
}

// here we are trying to create card with name, image and email
// for that we have created two components 1) one without props 'Card' and 2) with props 'Cardadvance'
function App() {
  return (
    <div className="App">
      {/* this way we can use card component but here the name and image is fixed */}
      {/* <Card />  */}

      {/* this way we can pass the name and image to the cardadvance component using props
          so props is similar to passing parameters to the function in other languages
      */}
      {/* <Cardadvance name="Amrita Rao" source="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Amrita_Rao_Indian_Female_Actor.jpg/330px-Amrita_Rao_Indian_Female_Actor.jpg" email="lmn@gmail.com"/> */}

      {/* another way of passing attribues is by using json object as we created celebrityList */}
      {/* <Cardadvance name = {celebrityList[0].name}
          source = {celebrityList[0].source}
          email = {celebrityList[0].email}  
      /> */}

      {/* for iterating through all the values in celebrityList dynamically we can use mapping */}
      {/* for this mapping first we have to create one function and pass it to map */}
      {celebrityList.map(insertCard)}
      {/* <Cardadvance/> */}
    </div>
  );
}

export default App;
