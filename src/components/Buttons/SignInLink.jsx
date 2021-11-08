import { Link } from "react-router-dom";

function SignInLink() {
    return (
    <div>
        <Link to="/signin" className="darkLink">Already Signed Up? Sign In</Link>
    </div>
    );
}

export default SignInLink;