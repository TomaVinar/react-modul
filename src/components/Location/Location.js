import React from "react";

import "./Location.css"

const Location = ({location}) => {

    const {id, name, type, dimension} = location

    return (
        <div className={'location_block'}>
            <div>{id}</div>
            <h3>{name}</h3>
            <div>{type}</div>
            <div>{dimension}</div>
        </div>
    );
};

export default Location;