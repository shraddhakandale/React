import React from 'react';
// import "./Login.css";

function Login(){
    return(
        <div className='divCenter'>
        <div id="boxShadow">
            <h1>Login Form!</h1>
            <form>
                <input type="text" placeholder="username"/>
                <input type="password" placeholder="password"/>
                <input className="myButton" type="submit"/>
            </form>
        </div>
        </div>
    )
}

export default Login;