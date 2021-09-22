import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";

const Registration = (props) => {


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