import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const NavOut = (props) => {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 mb-4">
                <div className="container-fluid d-flex flex-row justify-content-between">
                    <div className="row">
                        <a className="navbar-brand col-auto" href="/">
                        <img src="https://northwest-larpers.square.site/uploads/b/8e421cc0-5bf0-11ea-94a7-370806a9cf44/a1005f9bda8c16c56a5d00375baf7000.png?width=400" alt="" width="30" height="30" className="d-inline-block align-text-top mx-4"></img>
                            Shadow Accord
                        </a>
                        <div className="collapse navbar-collapse col-auto" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to={"/register"}>
                                        <a className="nav-link">Register</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>          
                    </div>
                </div>
            </nav>
    )
}

export default NavOut;