import { useHistory } from "react-router-dom";

function SignOutForm() {
    const history = useHistory();

    const handleSignOut = (e) => {
        e.preventDefault();
        window.localStorage.clear("")
        history.push("/")
    };

    return (
        <div>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
}

export default SignOutForm;