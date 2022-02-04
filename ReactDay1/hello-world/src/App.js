import logo from './logo.svg';
import './App.css';
// importing component
import Greet from './Components/Greet'; // this is the way of importing default exports
// import { Greet } from './Components/Greet'; // this is the way of importing named exports

function App() {
  return (
    <div className = "App">
        <Greet></Greet>
    </div>
  );
}

export default App;
