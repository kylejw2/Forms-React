import React from 'react';

const CreateAccount = () => {
    return (
        <form>
            <h1>Create an account</h1>
            <label htmlFor='name'></label>
            <input type='text' name='name' placeholder='Full name'></input>
            <br/>
            <label htmlFor='email'></label>
            <input type='email' name='email' placeholder='Email'></input>
            <br/>
            <label htmlFor='username'></label>
            <input type='text' name='username' placeholder='Username'></input>
            <br/>
            <label htmlFor='password'></label>
            <input type='password' name='password' placeholder='Password'></input>
            <br/>
            <button type='submit'>Create</button>
        </form>
    );
}

export default CreateAccount;