import React, { useState } from "react";

const Vampire = (props) => {
    const [Subfaction1, setSubfaction1] = useState(props.Subfaction1);
    const [Subfaction2, setSubfaction2] = useState(props.Subfaction2);
    const [Subfaction3, setSubfaction3] = useState(props.Subfaction3);
    const [errors, setErrors] = useState(props);

    return (
        <div>
            <label className="form-label">Vampire Subfactions</label>
            <div className="mb-3 col-4">
                <select 
                onChange={(e)=>setSubfaction1(e.target.value)}
                className="form-select text-dark fw-bold"
                value={Subfaction1} 
                name="Subfaction1">
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
            </div>
            <div className="col-4">
                <select 
                    onChange={(e)=>setSubfaction2(e.target.value)}
                    className="form-select text-dark fw-bold"
                    value={Subfaction2} 
                    name="Subfaction2">
                        <option>Road</option>
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
            </div>
        </div>
    )
}

export default Vampire;