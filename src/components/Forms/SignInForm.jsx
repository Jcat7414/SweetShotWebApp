import React, { useState } from "react";
import { useHistory } from "react-router";

function SignInForm() {
    const [credentials, setCredentials] = useState ({
        username: "",
        password: "",
        userid: "",
    });

    const history = useHistory();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = async() => {
        const response = await fetch(
            `${process.env.REACT_APP_API_URL}api-token-auth/`,
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }
        );
        return response.json();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username && credentials.password) {
            postData().then((response) => {
                window.localStorage.setItem("token", response.token);
                window.localStorage.setItem("user", credentials.username);
                history.push("/memorybank");
            });
        }
    };

    return (
        <form>
            <div>
                <label htmlFor="username">Name</label>
                <input
                    type="text"
                    id="username"
                    placeholder="Enter your name"
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                />
            </div>
            <p>Forgot your password?</p>
            <button type="submit" onClick={handleSubmit}>Sign In</button>
        </form>
    );
}

export default SignInForm;