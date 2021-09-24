import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Navbar from "../components/navbar";
import Shifter from "../components/shifter";
import Human from "../components/human";
import Vampire from "../components/vampire";

const NewCharacter = (props) => {
    // console.log("test props", props);
    const history = useHistory();
    if(!props.isLoggedIn) {
        history.push("/")
    }

    const [users, setUsers] = useState([]);
    const { id } = useParams();
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
                history.push(`/`);
            });
    }, []);

    // const { id } = useParams();
    const [Name, setName] = useState("");
    const [PlayerName, setPlayerName] = useState("");
    const [Faction, setFaction] = useState("");
    const [Subfaction1, setSubfaction1] = useState("");
    const changeSubfaction1 = (value) => {
        setSubfaction1(value);
    }
    const [Subfaction2, setSubfaction2] = useState("");
    const changeSubfaction2 = (value) => {
        setSubfaction2(value);
    }
    const [Subfaction3, setSubfaction3] = useState("");
    const changeSubfaction3 = (value) => {
        setSubfaction3(value);
    }
    const [Patron, setPatron] = useState("");
    const [GenRank, setGenRank] = useState("");
    const [Passion, setPassion] = useState("");
    const [Health, setHealth] = useState(10);
    const [Willpower, setWillpower] = useState(1);
    const [EnergyType, setEnergyType] = useState("Vitality");
    const changeEnergyType = (value) => {
        setEnergyType(value);
    }
    const [EnergyInt, setEnergyInt] = useState(10);
    const [VirtueType, setVirtueType] = useState("");
    const [VirtueInt, setVirtureInt] = useState(7);
    const [Devoured, setDevoured] = useState();
    const [ShadowDeedNameSire, setShadowDeedNameSire] = useState("");
    const changeShadowDeedNameSire = (value) => {
        setShadowDeedNameSire(value);
    }
    const [Sigil, setSigil] = useState("");
    const [Bank, setBank] = useState();
    const [errors, setErrors] = useState(null);
    // const history = useHistory();
    
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
            <div className="mt-5 d-flex justify-content-center row">
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
                            <div className="d-flex flex-column">
                                <label className="form-label">Faction</label>
                                {errors?.Faction && (
                                    <span className="text-danger"> {errors?.descripFaction?.message}</span>
                                )}
                                <select 
                                    onChange={(e)=> {
                                        setFaction(e.target.value);
                                        if(e.target.value === "Vampire") {
                                            setEnergyType("Vitae");
                                            setVirtueType("Road")
                                        } else if(e.target.value === "Shifter") {
                                            setEnergyType("Gnosis");
                                            setVirtueType("Rage");
                                        } else if(e.target.value === "Wraith") {
                                            setEnergyType("Pathos");
                                            setVirtueType("Angst");
                                        } else if(e.target.value === "Human") {
                                            setVirtueType("Humanity");
                                        }
                                    }}
                                    className="form-control text-dark fw-bold"
                                    value={Faction} 
                                    name="Faction">
                                    <option></option>
                                    <option value="Human">Human</option>
                                    <option value="Vampire">Vampire</option>
                                    <option value="Shifter">Shifter</option>
                                    <option value="Wraith">Wraith</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    {Faction === "Human" ?
                        <Human setSubfaction1={changeSubfaction1} setSubfaction2={changeSubfaction2} setSubfaction3={changeSubfaction3} setEnergyType={changeEnergyType} errors={errors} /> : ""
                    }
                    {Faction === "Shifter" ?
                        <Shifter Subfaction1={Subfaction1} setSubfaction1={changeSubfaction1} setSubfaction2={changeSubfaction2} setShadowDeedNameSire={changeShadowDeedNameSire} 
                        setSubfaction3={changeSubfaction3} setEnergyType={changeEnergyType} errors={errors} /> : ""
                    }
                    {Faction === "Vampire" ?
                        <Vampire setSubfaction1={changeSubfaction1} setSubfaction2={changeSubfaction2} setSubfaction3={changeSubfaction3} setShadowDeedNameSire={changeShadowDeedNameSire} errors={errors} /> : ""
                    }
                    <div className="row">
                        {(Faction === "Shifter" || Subfaction1 === "Kinfolk" || Subfaction1 === "Gifted Kinfolk" || Subfaction2 === "Kinfolk") ?
                            <div className="mb-3 col-4">
                                <div className="d-flex flex-column">
                                    <label className="form-label">Patron</label>
                                        {errors?.Faction && (
                                            <span className="text-danger"> {errors?.descripFaction?.message}</span>
                                        )}
                                    <input 
                                        onChange={(e)=>setPatron(e.target.value)}
                                        type="text" 
                                        className="form-control text-dark fw-bold"
                                        value={Patron}
                                        name="Patron" />
                                </div>
                            </div> : ""
                        }
                        {(Faction === "Vampire" || Faction === "Shifter") ? 
                            <div className="mb-3 col-4">
                                <div className="d-flex flex-column">
                                    {Faction === "Vampire" ?
                                        <label className="form-label">Generation</label> :
                                        <label className="form-label">Rank</label>
                                    }
                                    <input
                                        onChange={(e)=>setGenRank(e.target.value)}
                                        type="text"
                                        className="form-control text-dark fw-bold"
                                        value={GenRank}
                                        name="GenRank" />
                                </div>
                            </div> : ""
                        }
                        {Faction === "Wraith" ?
                            <div className="row">
                                <div className="mb-3 col-4">
                                    <label className="form-label">Passion</label>
                                    <input 
                                        onChange={(e)=>setPassion(e.target.value)}
                                        type="text"
                                        className="form-control text-dark fw-bold"
                                        value={Passion}
                                        name="Passion" />
                                </div>
                                <div className="mb-3 col-4">
                                    <label className="form-label">Legion</label>
                                    <select 
                                        onChange={(e)=>setSubfaction1(e.target.value)}
                                        className="form-control text-dark fw-bold"
                                        value={Subfaction1}
                                        name="Subfaction1">
                                        <option value="">Legion</option>
                                        <option value="The Iron Legion">The Iron Legion</option>
                                        <option value="The Skeletal Legion">The Skeletal Legion</option>
                                        <option value="The Grim Legion">The Grim Legion</option>
                                        <option value="The Penitent Legion">The Penitent Legion</option>
                                        <option value="The Emerald Legion">The Emerald Legion</option>
                                        <option value="The Silent Legion">The Silent Legion</option>
                                        <option value="The Legion of Paupers">The Legion of Paupers</option>
                                        <option value="The Legion of Fate">The Legion of Fate</option>
                                    </select>
                                </div>
                                <div className="mb-3 col-4">
                                    <label className="form-label">Shadow</label>
                                    <input 
                                        onChange={(e)=> {setShadowDeedNameSire(e.target.value)}}
                                        type="text"
                                        className="form-control text-dark fw-bold"
                                        value={ShadowDeedNameSire}
                                        name="ShadowDeedNameSire" />
                                </div>
                            </div> : ""
                        }
                    </div>
                    {Faction ?
                        <div className="row">
                                <div className="mb-3 col-4">
                                    <div className="d-flex flex-column">
                                        <label className="form-label">Health</label>
                                        <input 
                                            onChange={(e)=>setHealth(e.target.value)}
                                            type="number" 
                                            className="form-control text-dark fw-bold"
                                            value={Health}
                                            name="Health" />
                                    </div>
                                </div>
                                <div className="mb-3 col-4">
                                    <label className="form-label">Willpower</label>
                                    <input 
                                            onChange={(e)=>setWillpower(e.target.value)}
                                            type="number" 
                                            className="form-control text-dark fw-bold"
                                            value={Willpower}
                                            name="Willpower" />
                                </div>
                                <div className="mb-3 col-4">
                                    <div className="d-flex flex-column">
                                            <label className="form-label">{EnergyType}</label>
                                        <input 
                                            onChange={(e)=>setEnergyInt(e.target.value)}
                                            type="number" 
                                            className="form-control text-dark fw-bold"
                                            value={EnergyInt}
                                            name="EnergyInt" />
                                    </div>
                                </div>
                        </div> : ""
                    }
                    {Faction ?
                        <div className="row">
                            <div className="mb-3 col-4">
                                <div className="d-flex flex-column">
                                    <label className="form-label">{VirtueType}</label>
                                    <input 
                                        onChange={(e)=>setVirtureInt(e.target.value)}
                                        value={VirtueInt}
                                        className="form-control text-dark fw-bold"
                                        type="number" 
                                        name="VirtueInt" />
                                </div>
                            </div>
                        </div> : ""
                    }
                    <input type="submit" className="bg-dark border-light border-2 text-light" />
                    <h3 className="text-light">Subfaction1: {Subfaction1}</h3>
                    <h3 className="text-light">Subfaction2: {Subfaction2}</h3>
                    <h3 className="text-light">Subfaction3: {Subfaction3}</h3>
                    <h2>Gen/Rank: {GenRank}</h2>
                    <h3 className="text-light">Virtue Type: {VirtueType}</h3>
                    <h3 className="text-light">Shadow/DeedName/Sire: {ShadowDeedNameSire}</h3>
                </form>
            </div>
            <div className="row">
            </div>
        </div>
    )

}

export default NewCharacter;