import React from 'react';

const CreateAccount = () => {
    return (
        <form>
            <h1>Create an account</h1>
            <label for='name'></label>
            <input type='text' name='name' placeholder='Full name'></input>
            <br/>
            <label for='email'></label>
            <input type='email' name='email' placeholder='Email'></input>
            <br/>
            <label for='username'></label>
            <input type='text' name='username' placeholder='Username'></input>
            <br/>
            <label for='password'></label>
            <input type='password' name='password' placeholder='Password'></input>
            <br/>
            <button type='submit'>Create</button>
        </form>
    );
}

export default CreateAccount;