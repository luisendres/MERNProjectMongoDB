import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const NavLog = (props) => {
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
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <Link to={"/player/character/new/:id"}>
                                        <a className="nav-link">My Characters</a>
                                    </Link>
                                    <Link to={"/test"}>
                                        <a className="nav-link">test</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Events</a>
                                </li>
                                {/* The below snippet will only activate if the user is assigned to any of these roles ie one of these booleans has to be true */}
                                {/* { (user.Storyteller || user.CharacterGuide || user.CheckIn) ? 
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Manage Players</a>
                                    </li> : ""
                                } */}
                                <li className="nav-item">
                                    {/* <a className="nav-link text-decoration-underline" onClick={handleLogout}>Logout ({user})</a> */}
                                </li>
                            </ul>
                        </div>               
                    </div>
                </div>
            </nav>
    )
}

export default NavLog;