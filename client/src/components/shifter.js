import React, { useState } from "react";


const Shifter = (props) => {
    const [errors, setErrors] = useState(props.errors);

    return (
        <div>
            <div className="row">
                <label className="form-label">Shifter Subfactions</label>
                <div className="mb-3 col-4">
                    {errors?.Subfaction1 && (
                        <span className="text-danger"> {errors?.Subfaction1?.message}</span>
                    )}
                    <select 
                        onChange={(e)=>props.setSubfaction1(e.target.value)}
                        className="form-select text-dark fw-bold"
                        name="Subfaction1">
                            <option value="">Tribe</option>
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
                    onChange={(e)=>props.setSubfaction2(e.target.value)}
                    className="form-select text-dark fw-bold" 
                    name="Subfaction2">
                        <option value="">Breed</option>
                        <option value="Homid">Homid</option>
                        <option value="Lupus">Lupus</option>
                        <option value="Metis">Metis</option>
                    </select>
                </div>
                <div className="col-4">
                    <select 
                    onChange={(e)=>props.setSubfaction3(e.target.value)}
                    className="form-select text-dark fw-bold" 
                    name="Subfaction3">
                        <option value="">Auspice</option>
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