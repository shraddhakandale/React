import React from "react";
import Heading from "./Headingfunctioncomponent";
import List from "./Listfunctioncomponent";
// in such type of import we can give any name to the import
import NumberExport from "./Multifunctioncomponent";
// in such type of exports the name of functions should be same
import {mulitplyNum,divideNum} from "./Multifunctioncomponent";


function App() {
  return (
    <div className="App">
      <Heading/>
      <List/>
      <h1>variable function export example</h1>
      <p>My favourite number is : {NumberExport}</p>
      <p>Number * 2 = {mulitplyNum()}</p>
      <p>Number / 2 = {divideNum()}</p>
    </div>
  );
}

export default App;
