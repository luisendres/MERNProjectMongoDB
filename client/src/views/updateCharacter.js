import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import Vampire from "../components/vampire";
import Shifter from "../components/shifter";
import Human from "../components/human";


const UpdateCharacter = (props) => {
    const { id } = useParams();
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
    const [Health, setHealth] = useState();
    const [Willpower, setWillpower] = useState();
    const [EnergyType, setEnergyType] = useState("");
    const changeEnergyType = (value) => {
        setEnergyType(value);
    }
    const [EnergyInt, setEnergyInt] = useState();
    const [VirtueType, setVirtueType] = useState("");
    const [VirtueInt, setVirtureInt] = useState();
    const [Devoured, setDevoured] = useState();
    const [ShadowDeedNameSire, setShadowDeedNameSire] = useState("");
    const changeShadowDeedNameSire = (value) => {
        setShadowDeedNameSire(value);
    }
    const [Sigil, setSigil] = useState("");
    const [errors, setErrors] = useState(null);
    const history = useHistory();

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users/character/" + id)
            .then((res) => {
                setName(res.data.Name);
                setPlayerName(res.data.PlayerName);
                setFaction(res.data.Faction);
                setSubfaction1(res.data.Subfaction1);
                setSubfaction2(res.data.Subfaction2);
                setSubfaction3(res.data.Subfaction3);
                setPatron(res.data.Patron);
                setGenRank(res.data.GenRank);
                setPassion(res.data.Passion);
                setHealth(res.data.Health);
                setWillpower(res.data.Willpower);
                setEnergyType(res.data.EnergyType);
                setEnergyInt(res.data.EnergyInt);
                setVirtueType(res.data.VirtueType);
                setVirtureInt(res.data.VirtueInt);
                setDevoured(res.data.Devoured);
                setShadowDeedNameSire(res.data.ShadowDeedNameSire);
                setSigil(res.data.Sigil);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);

    const handleOnSubmit = (e) => {
        e.preventDefault();

        const character = {
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
            Sigil
        }

        axios
            .put("http://localhost:8000/api/users/character/" + id, character)
            .then((res) => {
                console.log(res.data);
                history.push("/");
            })
            .catch((err) => {
                setErrors(err.response.data.errors);
                console.log(err.response);
            });
    };

    while(Name == null) {
        return <p>Loading...</p>
    }

    return (
        <div className="mt-5 d-flex justify-content-center row">
            <form onSubmit={(e) => {
                handleOnSubmit(e);
            }} className="w-75 border border-light border-2 p-3">
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
                            onChange={(e)=>PlayerName(e.target.value)} 
                            type="text" 
                            className="form-control text-dark fw-bold" 
                            value={PlayerName}
                            name="PlayerName"/>
                    </div>
                    <div className="mb-3 col-4">
                        <div className="d-flex flex-column">
                            <label className="form-label">Faction</label>
                            {errors?.Faction && (
                                <span className="text-danger"> {errors?.Faction?.message}</span>
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
                    <Human Subfaction1={Subfaction1} setSubfaction1={changeSubfaction1} Subfaction2={Subfaction2} setSubfaction2={changeSubfaction2} Subfaction3={Subfaction3} setSubfaction3={changeSubfaction3} setEnergyType={changeEnergyType} errors={errors} /> : ""
                }
                {Faction === "Shifter" ?
                    <Shifter Subfaction1={Subfaction1} setSubfaction1={changeSubfaction1} Subfaction2={Subfaction2} setSubfaction2={changeSubfaction2} ShadowDeedNameSire={ShadowDeedNameSire} setShadowDeedNameSire={changeShadowDeedNameSire} Subfaction3={Subfaction3} setSubfaction3={changeSubfaction3} setEnergyType={changeEnergyType} errors={errors} /> : ""
                }
                {Faction === "Vampire" ?
                    <Vampire Subfaction1={Subfaction1} setSubfaction1={changeSubfaction1} Subfaction2={Subfaction2} setSubfaction2={changeSubfaction2} Subfaction3={Subfaction3} setSubfaction3={changeSubfaction3} ShadowDeedNameSire={ShadowDeedNameSire} setShadowDeedNameSire={changeShadowDeedNameSire} errors={errors} /> : ""
                }
                <div className="row">
                    {(Faction === "Shifter" || Subfaction1 === "Kinfolk" || Subfaction1 === "Gifted Kinfolk" || Subfaction2 === "Kinfolk") ?
                        <div className="mb-3 col-4">
                            <div className="d-flex flex-column">
                                <label className="form-label">Patron</label>
                                    {errors?.(Faction) && (
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
                                        placeholder={Health}
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
                        <div className="mb-3 col-4">
                            <div className="d-flex flex-column">
                                <label className="form-label">Sigil</label>
                                <input
                                    onChange={(e=>setSigil(e.target.value))} 
                                    type="file" 
                                    name="Sigil" />
                            </div>
                        </div>
                    </div> : ""
                }
                <input type="submit" className="btn btn-outline-dark border-light border-2 text-light"  />
            </form>
        </div>
    );
};

export default UpdateCharacter;