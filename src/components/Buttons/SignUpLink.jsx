import React from "react";
import { Link } from "react-router-dom";

function SignUpLink() {
    return (
    <div className="signin-up-link">
        <Link to="/signup">New? Sign Up</Link>
    </div>
    );
}

export default SignUpLink;