import { useState } from "react";
import { useHistory } from "react-router-dom";

function SignUpForm() {
    const [user, setNewUser] = useState({
        email: "",
        username: "",
        password: "",
        terms: ""
    });

        const handleChange = (e) => {
        e.preventDefault();
        const { id, value } = e.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [id]: value,
        }));
    }

    const history = useHistory();

    const postData = async() => {
        // const username = window.localStorage.getItem("username")

        const response = await fetch(
            `${process.env.REACT_APP_API_URL}users/signup/`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            }
        );
        return response.json;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postData().then((response) => {
            window.localStorage.setItem("username", user.username);
            window.localStorage.setItem("email", user.email);
            history.push("/signin");
        });
    };

    return (
        <form className="sign-up-form">
            <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    required
                    onChange={handleChange}
                />
            <label htmlFor="username">Name</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter your name"
                    required
                    onChange={handleChange}
                />
            <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    required
                    onChange={handleChange}
                />
            <input
                type="checkbox"
                id="terms"
                required
                onChange={handleChange}
            />
                <label htmlFor="terms">I agree to the Terms and Conditions</label>
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </form>
    );
}

export default SignUpForm;