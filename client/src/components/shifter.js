import React, { useState } from "react";


const Shifter = (props) => {
    const [Subfaction1, setSubfaction1] = useState(props.Subfaction1);
    const [Subfaction2, setSubfaction2] = useState(props.Subfaction2);
    const [Subfaction3, setSubfaction3] = useState(props.Subfaction3);
    const [errors, setErrors] = useState(props);

    return (
        <div>
            <div className="row">
                <label className="form-label">Shifter Subfactions (Tribe, Breed, Auspice)</label>
                <div className="mb-3 col-4">
                    {errors?.Subfaction1 && (
                        <span className="text-danger"> {errors?.Subfaction1?.message}</span>
                    )}
                    <select 
                        onChange={(e)=>setSubfaction1(e.target.value)}
                        className="form-select text-dark fw-bold"
                        value={Subfaction1} 
                        name="Subfaction1">
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
                </div>
                <div className="col-4">
                    <select 
                    onChange={(e)=>setSubfaction2(e.target.value)}
                    className="form-select text-dark fw-bold"
                    value={Subfaction2} 
                    name="Subfaction2">
                        <option>Breed</option>
                        <option value="Homid">Homid</option>
                        <option value="Lupus">Lupus</option>
                        <option value="Metis">Metis</option>
                    </select>
                </div>
                <div className="col-4">
                    <select 
                    onChange={(e)=>setSubfaction3(e.target.value)}
                    className="form-select text-dark fw-bold"
                    value={Subfaction3} 
                    name="Subfaction3">
                        <option>Auspice</option>
                        <option value="Ragabash">Ragabash</option>
                        <option value="Theurge">Theurge</option>
                        <option value="Philodox">Philodox</option>
                        <option value="Galliard">Galliard</option>
                        <option value="Ahroun">Ahroun</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default Shifter;