import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

const CharacterDetails = (props) => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const history = useHistory();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users/character/" + id)
            .then((res) => {
                console.log(res.data);
                setCharacter(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    while(character == null) {
        return <p>Loading...</p>
    }

    return (
        <div className="w-75 border border-light border-2 p-3 mt-3">
            <h4 className="me-5">Details about {character.Name}</h4>
        </div>
    )
};

export default CharacterDetails;