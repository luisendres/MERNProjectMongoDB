import axios from "axios";
import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "../components/navbar";

const UpdateCharacter = (props) => {
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const [errors, setErrors] = useState(null);
    const history = useHistory();

    const handleOnChange = (e) => {
        const key = e.target.name;
        
        setCharacter({...character, [key]: e.target.value});
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        setCharacter({...character, User_Id: id});


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
            <form onSubmit={handleOnSubmit} className="border-light border-2">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    {errors?.Name && (
                        <span className="text-danger"> {errors?.Name?.message}</span>
                    )}
                    <input 
                        onChange={(e)=>handleOnChange(e)} 
                        type="text" 
                        className="form-control" 
                        value={character.Name}
                        name="Name"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Player Name</label>
                    {errors?.PlayerName && (
                        <span className="text-danger"> {errors?.PlayerName?.message}</span>
                    )}
                    <input 
                        onChange={(e)=>handleOnChange(e)} 
                        type="text" 
                        className="form-control" 
                        value={character.PlayerName}
                        name="PlayerName"/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Faction</label>
                    {errors?.Faction && (
                        <span className="text-danger"> {errors?.descripFaction?.message}</span>
                    )}
                    <input 
                        onChange={(e)=>handleOnChange(e)} 
                        type="text" 
                        className="form-control" 
                        value={character.Faction}
                        name="Faction"/>
                </div>
                <input type="submit" className="bg-info border-dark border-2 text-white" />
            </form>
        </div>
    )
}