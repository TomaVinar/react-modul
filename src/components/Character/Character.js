import React from "react"

import css from "./Character.module.css"

const Character = ({character}) => {
    const {id, name, status, image} = character

    return (
        <div className={css.character_container}>
            <div>{id}</div>
            <h3>{name}</h3>
            <div>{status}</div>
            <img src={image} alt=""/>
        </div>
    );
};

export default Character;