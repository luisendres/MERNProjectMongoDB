import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";

const Home = (props) => {
    // console.log("test props", props);
    // console.log("test props", props.isLoggedIn._id);

    const history = useHistory();
    if(!props.isLoggedIn) {
        history.push("/")
    }

    const [characters, setCharacters] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users/characters/" + id)
            .then((res) => {
                setCharacters(res.data);
                console.log(res);
                // history.push(`/`);
            })
            .catch((err) => {
                console.log("not authorized");
                console.log(err.response);
            });
    }, []);
    
    return(
        <div>
            <h1>AHHHHHHHHHHHHHHHHHHHHH</h1>
            <table className=" w-50 table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Player Name</th>
                            <th>Character Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {characters.map((ch) => {
                            return (
                                <tr key={ch._id}>
                                    <td>{ch.Name}</td>
                                    <td>{ch.PlayerName}</td>
                                    <td>
                                        {/* <Link to={`/${ch._id}`}>
                                            details 
                                        </Link>
                                        <span> | </span>
                                        <Link to={`/${ch._id}/edit`}>
                                            edit
                                        </Link> */}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    )
}

export default Home;