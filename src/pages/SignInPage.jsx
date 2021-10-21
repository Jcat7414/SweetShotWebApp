import Header from "../components/Menu/Header";
import SignInForm from "../components/Forms/SignInForm";
import { Links } from "../components/Buttons/Link";

function SignInPage() {
    return (
        <div>
            <Header />
            <h5>Sign In to Sweet Shot</h5>
            <p>Ready to capture a new <i>Sweet Shot</i> memory or take a stroll down memory lane?</p>
            <p>Sign in to access your <i>Sweet Shot</i> Memory Bank</p>
            <SignInForm />
            <Links link="/signup" linkStyle="darkLink">New? Sign Up</Links>
        </div>
    );
}

export default SignInPage;