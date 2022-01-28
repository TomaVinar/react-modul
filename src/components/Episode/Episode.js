import React from "react";

import "./Episode.css"

const Episode = ({item}) => {
    const {id, name, air_date, episode} = item

    return (
        <div className={'episode_block'}>
            <div>{id}</div>
            <h3>{name}</h3>
            <div>{air_date}</div>
            <div>{episode}</div>
        </div>
    );
};

export default Episode;