import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";

const Registration = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState(null);

    const register = (event) => {
        event.preventDefault();
    
        const newUser = { username, email, password, confirmPassword };
    
        axios
            .post("http://localhost:8000/api/register", newUser, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);
        
                setUsername("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
            })
            .catch((err) => {
                console.log(err);
        
                setErrors(err.response.data.errors);
            });
    };
    

    return (
        <div className="">
            <Navbar />
            <div className="mt-5 d-flex flex-column align-items-center bg-dark">
                <h1 className="text-white">Register</h1>
            </div>
        </div>
    )
}

export default Registration;