import React from "react";
import SignUpForm from "../components/Forms/SignUpForm";
import Header from "../components/Menu/Header";

function SignUpPage() {
    return (
        <div>
            <Header />
            <div>
                <h5>Sign Up for Sweet Shot</h5>
            </div>
            <div>
                <p>Start capturing your <i>Sweet Shot</i> memories today by creating your own Memory Bank.</p>
            </div>
            <SignUpForm />
        </div>
    );
}

export default SignUpPage;