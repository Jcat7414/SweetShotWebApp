import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../UserContext";

function SignOutForm() {
    const { user, setUser } = useContext(UserContext);

    const history = useHistory();

    const handleSignOut = (e) => {
        e.preventDefault();
        setUser(null);
        window.localStorage.clear("")
        history.push("/")
    };

    return (
        <div>
            <p>If you are sure you want to sign out now, {user} click this button</p>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
    );
}

export default SignOutForm;