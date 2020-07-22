import React from 'react';

const Login = () => {
    return (
        <form>
            <h1>Log in</h1>
            <input type='text' name='username' placeholder='Username'></input>
            <br/>
            <input type='password' name='password' placeholder='Password'></input>
            <br/>
            <button type='submit'>Log in</button>
        </form>
    );
}

export default Login;