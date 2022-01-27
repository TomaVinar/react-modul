import React from 'react';

const Location = ({location}) => {

    const {id, name, type, dimension} = location

    return (
        <div>
            <div>{id}</div>
            <h3>{name}</h3>
            <div>{type}</div>
            <div>{dimension}</div>
        </div>
    );
};

export default Location;