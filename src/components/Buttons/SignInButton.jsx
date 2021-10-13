import React from 'react';
import { Link } from "react-router-dom";

function SignInButton(props) {
    const style = props
    return (
        <div>
                <Link to="/signin"><button id={style}>Sign In</button></Link>
        </div>
    );
}

export default SignInButton;