import React  from "react";
import { Link } from "react-router-dom";
import Header from "../components/Menu/Header";
import SignInForm from "../components/Forms/SignInForm";

function SignInPage() {
    return (
        <div>
            <Header />
            <h5>Sign In to Sweet Shot</h5>
            <p>Ready to capture a new <i>Sweet Shot</i> memory or take a stroll down memory lane?</p>
            <p>Sign in to access your <i>Sweet Shot</i> Memory Bank</p>
            <SignInForm />
            <Link to="/signup">New? Sign Up</Link>
        </div>
    );
}

export default SignInPage;