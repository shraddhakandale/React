import logo from './logo.svg';
import './App.css';
import Login from './Login';

// in conditional rendering we are rendering the content based on the condition
// if isLogin is true then we render welcome user
// if isLogin is false then we render Login component in which we have login form

function App() {
  const isLogin = false;
  return (
    <div>
        {isLogin ? <h1>Welcome User!</h1>:<Login />}
    </div>
  );
}

export default App;
