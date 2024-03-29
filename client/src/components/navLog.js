import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


const NavLog = (props) => {
    // console.log("test props", props);

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users/loggedin", {
                withCredentials: true,
            })
            .then((res) => {
                setUsers(res.data);
                console.log(res);
            })
            .catch((err) => {
                console.log("not authorized");
                console.log(err.response);
                // history.push(`/`);
            });
    }, []);

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
                                    {/* <a className="nav-link" href={`/home/${users._id}`}>Home</a> */}
                                    <Link to={`/home/${users._id}`}>
                                        <a className="nav-link">Home</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={`/player/character/new/${users._id}`}>
                                        <a className="nav-link">New Character</a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Events</a>
                                </li>
                                
                            </ul>
                        </div>               
                    </div>
                </div>
            </nav>
    )
}

export default NavLog;