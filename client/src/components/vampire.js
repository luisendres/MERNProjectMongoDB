import React, { useState } from "react";

const Vampire = (props) => {
    const [errors, setErrors] = useState(props);

    return (
        <div>
            <label className="form-label">Vampire Subfactions</label>
            <div className="row">
                <div className="mb-3 col-4">
                    <select 
                    onChange={(e)=>props.setSubfaction1(e.target.value)}
                    className="form-select text-dark fw-bold"
                    name="Subfaction1">
                        <option value="">Clan</option>
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
                        onChange={(e)=>props.setSubfaction2(e.target.value)}
                        className="form-select text-dark fw-bold"
                        name="Subfaction2">
                            <option value="">Road</option>
                            <option value="Humanity">Humanity</option>
                            <option value="Heaven">Heaven</option>
                            <option value="Kings">Kings</option>
                            <option value="Sin">Sin</option>
                            <option value="Beast">Beast</option>
                            <option value="Lilith">Lilith</option>
                            <option value="Blood">Blood</option>
                            <option value="Bones">Bones</option>
                            <option value="Metamorphosis">Metamorphosis</option>
                            <option value="Paradox">Paradox</option>
                            <option value="Night">Night</option>
                            <option value="Serpent">Serpent</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Vampire;