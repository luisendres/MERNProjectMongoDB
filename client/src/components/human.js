import React, { useState } from "react";

const Human = (props) => {
    const [Subfaction1, setSubfaction1] = useState(props.Subfaction1);
    const [Subfaction2, setSubfaction2] = useState(props.Subfaction2);
    const [Subfaction3, setSubfaction3] = useState(props.Subfaction3);
    const [errors, setErrors] = useState(props.errors);

    return (
        <div className="row">
            <label className="form-label">Human Subfactions</label>
            <div className="mb-3 col-4">
                {errors?.Subfaction1 && (
                    <span className="text-danger"> {errors?.Subfaction1?.message}</span>
                )}
                <select 
                    onChange={(e)=>setSubfaction1(e.target.value)}
                    className="form-select text-dark fw-bold"
                    value={Subfaction1} 
                    name="Subfaction1">
                        <option>Type</option>
                        <option value="Commoner">Commoner</option>
                        <option value="Ghoul">Ghoul</option>
                        <option value="Kinfolk">Kinfolk</option>
                        <option value="Gifted Kinfolk">Gifted Kinfolk</option>
                        <option value="Sorcerer">Sorcerer</option>
                        <option value="Fomori">Fomori</option>
                </select>
            </div>
            { Subfaction1 === "Ghoul" ?
                <div className="col-4">
                    <select 
                    onChange={(e)=>setSubfaction2(e.target.value)}
                    className="form-select text-dark fw-bold"
                    value={Subfaction2} 
                    name="Subfaction2">
                        <option>Clan</option>
                        <option value="Assamite">Assamite</option>
                        <option value="Baali">Baali</option>
                        <option value="Brujah">Brujah</option>
                        <option value="Caitiff">Caitiff</option>
                        <option value="Cappadocian">Cappadocian</option>
                        <option value="Follower of Set">Follower of Set</option>
                        <option value="Gangrel">Gangrel</option>
                        <option value="Gargoyle">Gargoyle</option>
                        <option value="Giovanni">Giovanni</option>
                        <option value="Lamia">Lamia</option>
                        <option value="Lasombra">Lasombra</option>
                        <option value="Malkavian">Malkavian</option>
                        <option value="Nosferatu">Nosferatu</option>
                        <option value="Ravnos">Ravnos</option>
                        <option value="Salubri">Salubri</option>
                        <option value="Toreador">Toreador</option>
                        <option value="Tremer">Tremer</option>
                        <option value="Tzimisce">Tzimisce</option>
                        <option value="Ventrue">Ventrue</option>
                    </select>
                </div> : ""
            }
            {Subfaction1 === "Sorcerer" ?
                <div className="col-4">
                    <select 
                    onChange={(e)=>setSubfaction2(e.target.value)}
                    className="form-select text-dark fw-bold"
                    value={Subfaction2} 
                    name="Subfaction2">
                        <option></option>
                        <option value="Kinfolk">Kinfolk</option>
                    </select>
                </div> : ""
            }
            {Subfaction1 === "Kinfolk" || Subfaction1 === "Gifted Kinfolk" || Subfaction2 === "Kinfolk" ?
                <div className="col-4">
                    <select 
                    onChange={(e)=>setSubfaction3(e.target.value)}
                    className="form-select text-dark fw-bold"
                    value={Subfaction3} 
                    name="Subfaction3">
                        <option>Tribe</option>
                        <option value="Black Fury">Black Fury</option>
                        <option value="Black Spiral Dancer">Black Spiral Dancer</option>
                        <option value="Bone Gnawer">Bone Gnawer</option>
                        <option value="Child of Gaia">Child of Gaia</option>
                        <option value="Fenrir">Fenrir</option>
                        <option value="Fianna">Fianna</option>
                        <option value="Red Talon">Red Talon</option>
                        <option value="Shadow Lord">Shadow Lord</option>
                        <option value="Silent Strider">Silent Strider</option>
                        <option value="Silver Fang">Silver Fang</option>
                        <option value="Warder of Man">Warder of Man</option>
                    </select>
                </div> : ""
            }
        </div>
    )
}

export default Human;