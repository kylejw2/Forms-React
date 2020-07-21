import React from 'react';

const Login = () => {
    return (
        <form>
            <h1>Log in</h1>
            <label for='username'></label>
            <input type='text' name='username' placeholder='Username'></input>
            <br/>
            <label for='password'></label>
            <input type='password' name='password' placeholder='Password'></input>
            <br/>
            <button type='submit'>Log in</button>
        </form>
    );
}

export default Login;