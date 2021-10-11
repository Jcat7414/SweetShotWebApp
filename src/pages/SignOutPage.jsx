import React from 'react';
import { Link } from "react-router-dom";
import SignOutForm from '../components/Forms/SignOutForm';
import Header from '../components/Menu/Header';

function SignOutPage() {
    return (
        <div>
            <Header />
            <h5>Sign Out of Sweet Shot</h5>
            <p>We hope you enjoyed reliving some of your Sweet Shot memories.</p>
            <SignOutForm />
            <Link to="/memorybank">Not ready to go? Return to Memory Bank</Link>
        </div>
    );
}

export default SignOutPage;