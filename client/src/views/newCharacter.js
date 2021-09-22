import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";

const newCharacter = (props) => {
    const { id } = useParams();
    const [character, setCharacter] = useState();

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
                history.pushState(`/`)
            })
    }

}