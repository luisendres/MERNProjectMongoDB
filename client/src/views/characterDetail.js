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
        <div className="d-flex justify-content-center">
            <table className="table table-bordered w-75 border border-dark border-2 bg-light">
                <tbody>
                    <tr className="bg-secondary">
                        <td>Character Name:</td>
                        <td>Player Name:</td>
                        <td>Faction:</td>
                    </tr>
                    <tr>
                        <td>{character.Name}</td>
                        <td>{character.PlayerName}</td>
                        <td>{character.Faction}</td>
                    </tr>
                    <tr className="bg-secondary">
                        <td colSpan="3">Subfactions: <em>(Tribe, Breed, Clan, Auspice, Legion, Guild, Ghoul, Kinfolk, Path)</em></td>
                    </tr>
                    <tr>
                        <td>{character.Subfaction1}</td>
                        <td>{character.Subfaction2}</td>
                        <td>{character.Subfaction3}</td>
                    </tr>
                    <tr className="bg-secondary">
                        <td>Patron:</td>
                        <td>Gen/Rank:</td>
                        <td>Passion:</td>
                    </tr>
                    <tr>
                        <td>{character.Patron}</td>
                        <td>{character.GenRank}</td>
                        <td>{character.Passion}</td>
                    </tr>
                    <tr className="bg-secondary">
                        <td>Health:</td>
                        <td>Willpower:</td>
                        <td>{character.EnergyType}:</td>
                        <td>{character.VirtueType}</td>
                        <td>Devoured:</td>
                        <td>Shadow - Deed Name - Sire</td>
                    </tr>
                    <tr></tr>
                </tbody>

            </table>
        </div>
    )
};

export default CharacterDetails;