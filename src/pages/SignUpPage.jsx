import Header from "../components/Menu/Header";
import SignUpForm from "../components/Forms/SignUpForm";
import SignInLink from "../components/Buttons/SignInLink";

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
            <SignInLink />
        </div>
    );
}

export default SignUpPage;