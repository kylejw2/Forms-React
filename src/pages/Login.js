import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
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
                <h1>Log in</h1>
                <input type='text' name='username' value={this.state.username} onChange={this.handleOnChange} placeholder='Username'></input>
                <br/>
                <input type='password' name='password' value={this.state.password} onChange={this.handleOnChange} placeholder='Password'></input>
                <br/>
                <button type='submit' onClick={event => {event.preventDefault(); this.props.validateUser(this.state)}}>Log in</button>
            </form>
        );
    }
}

export default Login;