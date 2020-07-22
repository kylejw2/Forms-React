import React from 'react';

class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: ''
        }

        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event) {
        const target = event.target;
        this.setState({
            [target.name]: target.value
        })
    }

    render() {
        return (
            <form>
                <h1>Forgot Password</h1>
                <input type='email' name='email' value={this.state.email} onChange={this.handleOnChange} placeholder='Email'></input>
                <br/>
                <input type='text' name='username' value={this.state.username} onChange={this.handleOnChange} placeholder='Username'></input>
                <br/>
                <input type='password' name='password' value={this.state.password} onChange={this.handleOnChange} placeholder='New password'></input>
                <br/>
                <button type='submit' onClick={event => {event.preventDefault(); this.props.updatePassword(this.state)}}>Reset password</button>
            </form>
        );
    }
}

export default ForgotPassword;