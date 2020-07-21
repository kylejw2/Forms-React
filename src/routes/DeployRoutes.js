import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateAccount from './CreateAccount';
import Login from './Login';
import ForgotPassword from './ForgotPassword';

const DeployRoutes = () => {
    return (
        <Switch>
            <Route path="/CreateAccount">
                <CreateAccount />
            </Route>
            <Route path="/Login">
                <Login />
            </Route>
            <Route path="/ForgotPassword">
                <ForgotPassword />
            </Route>
        </Switch>
    );
}

export default DeployRoutes;