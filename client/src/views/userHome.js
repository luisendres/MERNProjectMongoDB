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

    const handleDelete = (delId, delName) => {
        if(window.confirm(`Are you sure you want to delete ${delName}`))
        {
            axios
            .delete("http://localhost:8000/api/users/characters/" + delId)
            .then((res) => {
                // It has successfully been deleted from the DATABASE
                // It is still IN our state, we need to remove it from state.
                const filterCharacters = characters.filter((ch) => {
                    return ch._id !== delId;
                });

                setCharacters(filterCharacters);
            })
            .catch((err) => {
                console.log(err.response);
            });
        }
    };
    
    return(
        <div className="d-flex justify-content-center">
            {/* <h1>AHHHHHHHHHHHHHHHHHHHHH</h1> */}
            <table className=" w-50 table table-striped table-bordered bg-light">
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
                                    <td>{ch.PlayerName}</td>
                                    <td>{ch.Name}</td>
                                    <td className="d-flex justify-content-around">
                                        <Link to={`/player/character/details/${ch._id}`}>
                                            View 
                                        </Link>
                                        <span> | </span>
                                        <Link to={`/player/character/update/${ch._id}`}>
                                            Update
                                        </Link>
                                        <span> | </span>
                                        <button
                                            onClick={(e) => {
                                                handleDelete(ch._id, ch.Name);
                                            }}
                                            className="btn btn-sm btn-outline-danger"
                                        >
                                            Delete
                                        </button>
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