import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";


const Navbar = (props) => {
    const [user, setUser] = useState("");


    const handleLogin = (e) => {
        setUser("Hello!");
        return console.log("Hello!");
    }

    const handleLogout = (e) => {
        setUser("");
        return console.log("Goodbye!");
    }

    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark w-100">
                <div class="container-fluid d-flex flex-row justify-content-between">
                    <div className="row">
                        <a className="navbar-brand col-auto" href="/">
                        <img src="https://northwest-larpers.square.site/uploads/b/8e421cc0-5bf0-11ea-94a7-370806a9cf44/a1005f9bda8c16c56a5d00375baf7000.png?width=400" alt="" width="30" height="30" className="d-inline-block align-text-top mx-4"></img>
                            Shadow Accord
                        </a>
                        { user ? 
                            <div className="collapse navbar-collapse col-auto" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">My Characters</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Events</a>
                                    </li>
                                    {/* The below snippet will only activate if the user is assigned to any of these roles ie one of these booleans has to be true */}
                                    { (user.Storyteller || user.CharacterGuide || user.CheckIn) ? 
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Manage Players</a>
                                        </li> : ""
                                    }
                                    <li className="nav-item">
                                        <a className="nav-link text-decoration-underline" onClick={handleLogout}>Logout ({user})</a>
                                    </li>
                                </ul>
                            </div> :
                                <div className="collapse navbar-collapse col-auto" id="navbarNavDropdown">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Register</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" onClick={handleLogin}>Login</a>
                                        </li>
                                    </ul>
                                </div>                        
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;