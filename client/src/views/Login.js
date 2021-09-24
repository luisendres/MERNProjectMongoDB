import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
// import { navigate } from "@reach/router";

const Login = ({ setLoggedIn, isLoggedIn }) => {
    const history = useHistory();
    // if(isLoggedIn) {
    //     history.goBack();
    // }
    if(isLoggedIn) {
        history.push(`/home/${isLoggedIn._id}`);
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const login = (event) => {
        event.preventDefault();
        axios
        .post(
            "http://localhost:8000/api/login",
            { email, password },
            {
                withCredentials: true,
            }
        )
        .then((res) => {
            console.log(res.data);
            setLoggedIn(res.data);
            // history.push(`/home/${res.data._id}`);
        })
        .catch((err) => {
            console.log(err);
            setLoggedIn(null);
            setErrorMessage(err.response.data.msg);
        });
    };

    return (
        <div className="d-flex justify-content-center gap-5">
            <div>
                <img src="https://northwest-larpers.square.site/uploads/b/8e421cc0-5bf0-11ea-94a7-370806a9cf44/a1005f9bda8c16c56a5d00375baf7000.png?width=400" alt="" />
            </div>
            <fieldset>
                <legend>Sign In</legend>
                
                <form onSubmit={login}>
                    <p className="form-group">
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    </p>
                    <p className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="email"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    </p>
                    <input type="submit" value="Sign In" className="btn" />
                    <p className="error-message">{errorMessage ? errorMessage : ""}</p>
                </form>
            </fieldset>
        </div>
    );
};

export default Login;