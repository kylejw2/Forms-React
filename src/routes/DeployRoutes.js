import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateAccount from '../pages/CreateAccount';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';

class DeployRoutes extends React.Component {
    render() {
        return (
            <Switch>
            <Route path="/CreateAccount" >
                <CreateAccount createUser={user => this.props.createUser(user)} />
            </Route>
            <Route path="/Login">
                <Login validateUser={user => this.props.validateUser(user)} />
            </Route>
            <Route path="/ForgotPassword">
                <ForgotPassword updatePassword={user => this.props.updatePassword(user)} />
            </Route>
        </Switch>
        );
    }
}

export default DeployRoutes;