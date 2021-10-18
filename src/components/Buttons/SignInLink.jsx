import { Link } from "react-router-dom";

function SignInLink() {
    return (
    <div className="signin-up-link">
        <Link to="/signin">Already Signed Up? Sign In</Link>
    </div>
    );
}

export default SignInLink;