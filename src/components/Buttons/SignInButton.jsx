import React from 'react';
import { Link } from "react-router-dom";
import Header from "../Menu/Header";

function SignInButton() {

    return (
        <div>
            <Header />
            <div className="sign-in-button">
                <Link to="/signin"><button className="button-full-width-secondary">Sign In</button></Link>
            </div>
            <div>
                <Link to="/signup">New? Sign Up</Link>
            </div>
        </div>
    );
}

export default SignInButton;