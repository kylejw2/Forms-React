import React from 'react';

const ForgotPassword = () => {
    return (
        <form>
            <h1>Forgot Password</h1>
            <label for='email'></label>
            <input type='email' name='email' placeholder='Email'></input>
            <br/>
            <label for='username'></label>
            <input type='text' name='username' placeholder='Username'></input>
            <br/>
            <button type='submit'>Reset password</button>
        </form>
    );
}

export default ForgotPassword;