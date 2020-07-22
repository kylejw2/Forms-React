import React from 'react';

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            username: '',
            password: ''
        };

        this.handleOnChange = this.handleOnChange.bind(this);

    }

    handleOnChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        });
    }

    render() {
        return (
            <form>
                <h1>Create an account</h1>
                <label htmlFor='name'></label>
                <input type='text' name='name' value={this.state.name.value} onChange={this.handleOnChange} placeholder='Full name'></input>
                <br/>
                <label htmlFor='email'></label>
                <input type='email' name='email' value={this.state.email.value} onChange={this.handleOnChange} placeholder='Email'></input>
                <br/>
                <label htmlFor='username'></label>
                <input type='text' name='username' value={this.state.username.value} onChange={this.handleOnChange} placeholder='Username'></input>
                <br/>
                <label htmlFor='password'></label>
                <input type='password' name='password' value={this.state.password.value} onChange={this.handleOnChange} placeholder='Password'></input>
                <br/>
                <button type='submit' onClick={(event) => {event.preventDefault(); this.props.createUser(this.state)}}>Create</button>
            </form>
        );
    }
}

export default CreateAccount;