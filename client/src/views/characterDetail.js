import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

const CharacterDetails = (props) => {
    const history = useHistory();
    if(!props.isLoggedIn) {
        history.push("/")
    }
    
    const { id } = useParams();
    const [character, setCharacter] = useState(null);

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
            <table className="table table-bordered w-75 border border-dark border-2 bg-light" id="character sheet">
                <thead>
                    <tr className="fw-bold">
                        <th colSpan="6" className="fs-2"><img src="https://northwest-larpers.square.site/uploads/b/8e421cc0-5bf0-11ea-94a7-370806a9cf44/a1005f9bda8c16c56a5d00375baf7000.png" alt="shadow accord logo" width="50" height="50" className="me-2"/> Shadow Accord</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-secondary fw-bold">
                        <td colspan="2">Character Name:</td>
                        <td colspan="2">Player Name:</td>
                        <td colspan="2">Faction:</td>
                    </tr>
                    <tr className="fw-bold">
                        <td colspan="2">{character.Name}</td>
                        <td colspan="2">{character.PlayerName}</td>
                        <td colspan="2">{character.Faction}</td>
                    </tr>
                    <tr className="bg-secondary fw-bold">
                        <td colSpan="6">Subfactions: <em>(Tribe, Breed, Clan, Auspice, Legion, Guild, Ghoul, Kinfolk, Path)</em></td>
                    </tr>
                    <tr className="fw-bold">
                        <td colspan="2">{character.Subfaction1}</td>
                        <td colspan="2">{character.Subfaction2}</td>
                        <td colspan="2">{character.Subfaction3}</td>
                    </tr>
                    <tr className="bg-secondary fw-bold">
                        <td colspan="2">Patron:</td>
                        <td colspan="2">Gen/Rank:</td>
                        <td colspan="2">Passion:</td>
                    </tr>
                    <tr className="fw-bold">
                        <td colspan="2">{character.Patron}</td>
                        <td colspan="2">{character.GenRank}</td>
                        <td colspan="2">{character.Passion}</td>
                    </tr>
                    <tr className="bg-secondary fw-bold">
                        <td>Health:</td>
                        <td>Willpower:</td>
                        <td>{character.EnergyType}:</td>
                        <td>{character.VirtueType}</td>
                        <td>Devoured:</td>
                        <td>Shadow - Deed Name - Sire</td>
                    </tr>
                    <tr className="fw-bold">
                        <td>{character.Health}</td>
                        <td>{character.Willpower}</td>
                        <td>{character.EnergyInt}</td>
                        <td>{character.VirtueInt}</td>
                        <td>{character.Devoured}</td>
                        <td>{character.ShadowDeedNameSire}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default CharacterDetails;