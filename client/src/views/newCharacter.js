import axios from "axios";
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "../components/navbar";

const NewCharacter = (props) => {
    const { id } = useParams();
    const [Name, setName] = useState("");
    const [PlayerName, setPlayerName] = useState("");
    const [Faction, setFaction] = useState("");
    const [Subfaction1, setSubfaction1] = useState("");
    const [Subfaction2, setSubfaction2] = useState("");
    const [Subfaction3, setSubfaction3] = useState("");
    const [Patron, setPatron] = useState("");
    const [GenRank, setGenRank] = useState("");
    const [Passion, setPassion] = useState("");
    const [Health, setHealth] = useState();
    const [Willpower, setWillpower] = useState();
    const [EnergyType, setEnergyType] = useState("");
    const [EnergyInt, setEnergyInt] = useState();
    const [VirtueType, setVirtueType] = useState("");
    const [VirtueInt, setVirtureInt] = useState();
    const [Devoured, setDevoured] = useState();
    const [ShadowDeedNameSire, setShadowDeedNameSire] = useState("");
    const [Sigil, setSigil] = useState("");
    const [Bank, setBank] = useState();
    const [errors, setErrors] = useState(null);
    const history = useHistory();

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const character = {
            User_Id: id,
            Name,
            PlayerName,
            Faction,
            Subfaction1,
            Subfaction2,
            Subfaction3,
            Patron,
            GenRank,
            Passion,
            Health,
            Willpower,
            EnergyType,
            EnergyInt,
            VirtueType,
            VirtueInt,
            Devoured,
            ShadowDeedNameSire,
            Sigil,
            Bank
        }


        axios
            .put("http://localhost:8000/api/characters/", character)
            .then((res) => {
                console.log(res.data);
                history.pushState(`/player/${id}`);
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
                console.log(err.response);
            })
    }

    return (
        <div>
            <Navbar />
            <div className="mt-5 d-flex justify-content-center">
                <form onSubmit={handleOnSubmit} className="w-75 border border-light border-2 p-3">
                    <div className="row">
                        <div className="mb-3 col-4">
                            <label className="form-label">Name</label>
                            {errors?.Name && (
                                <span className="text-danger"> {errors?.Name?.message}</span>
                            )}
                            <input 
                                onChange={(e)=>setName(e.target.value)} 
                                type="text" 
                                className="form-control text-dark fw-bold" 
                                value={Name}
                                name="Name"/>
                        </div>
                        <div className="mb-3 col-4">
                            <label className="form-label">Player Name</label>
                            {errors?.PlayerName && (
                                <span className="text-danger"> {errors?.PlayerName?.message}</span>
                            )}
                            <input 
                                onChange={(e)=>setPlayerName(e.target.value)} 
                                type="text" 
                                className="form-control text-dark fw-bold" 
                                value={PlayerName}
                                name="PlayerName"/>
                        </div>
                        <div className="mb-3 col-4">
                            <label className="form-label">Faction</label>
                            {errors?.Faction && (
                                <span className="text-danger"> {errors?.descripFaction?.message}</span>
                            )}
                            <input 
                                onChange={(e)=>setFaction(e.target.value)} 
                                type="text" 
                                className="form-control text-dark fw-bold" 
                                value={Faction}
                                name="Faction"/>
                        </div>
                    </div>
                    <div className="mb-3 col-auto">
                        <label className="form-label">Subfactions</label>
                        {errors?.Faction && (
                            <span className="text-danger"> {errors?.descripFaction?.message}</span>
                        )}
                        <input 
                            onChange={(e)=>setSubfaction1(e.target.value)} 
                            type="text" 
                            className="form-control text-dark fw-bold" 
                            value={Subfaction1}
                            name="Faction"/>
                    </div>
                    <input type="submit" className="bg-info border-dark border-2 text-white" />
                </form>
            </div>
        </div>
    )

}

export default NewCharacter;