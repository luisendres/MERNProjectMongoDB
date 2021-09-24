import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "../components/navbar";

const Registration = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState(null);
    
    const history = useHistory();

    const register = (event) => {
        event.preventDefault();
    
        const newUser = { firstName, lastName, email, password, confirmPassword };

    
        axios
            .post("http://localhost:8000/api/register", newUser, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);
                history.push(`/`);
            })
            .catch((err) => {
                console.log(err);
        
                setErrors(err.response.data.errors);
            });
    };

    return (
        <div className="">
            <div className="mt-5 d-flex flex-column align-items-center">
                <h1 className="text-white">Register</h1>
                <fieldset>
                    <form className="w-100 p-2 border border-dark d-flex flex-column gap-3 mt-3" onSubmit={register}>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input
                                type="text"
                                name="firstName"
                                onChange={(e) => setFirstName(e.target.value)}
                                className="form-control"
                            />
                            {/* ?. is called optional chaining, lets you safely try to access keys that might not exist and avoid errors */}
                            {errors?.firstName && (
                                <span className="error-message">
                                {errors.firstName?.properties?.message}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Last Name:</label>
                            <input
                                type="text"
                                name="lastName"
                                onChange={(e) => setLastName(e.target.value)}
                                className="form-control"
                            />
                            {/* ?. is called optional chaining, lets you safely try to access keys that might not exist and avoid errors */}
                            {errors?.lastName && (
                                <span className="error-message">
                                {errors.lastName?.properties?.message}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                            />
                            {errors?.email && (
                                <span className="error-message">
                                {errors.email?.properties?.message}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                name="email"
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                            />
                            {errors?.password && (
                                <span className="error-message">
                                {errors.password?.properties?.message}
                                </span>
                            )}
                        </div>

                        <div className="form-group">
                            <label>Confirm Password:</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="form-control"
                            />
                            {errors?.confirmPassword ? (
                                <span className="error-message">
                                {errors.confirmPassword?.properties?.message}
                                </span>
                            ) : (
                                ""
                            )}
                        </div>

                        <input type="submit" value="Sign Up"  className="btn btn-outline-dark border-light border-2 text-light" />
                    </form>
                </fieldset>
            </div>
        </div>
    )
}

export default Registration;