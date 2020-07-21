import React from 'react';
import { Link } from "react-router-dom";


const Menu = () => {
    return (
        <ul>
            <li>
                <Link to="/CreateAccount">Create account</Link>
            </li>
            <li>
                <Link to="/Login">Log in</Link>
            </li>
            <li>
                <Link to="/ForgotPassword">Forgot password</Link>
            </li>
        </ul>
    );
}

export default Menu;