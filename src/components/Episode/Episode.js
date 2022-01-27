import React from 'react';

const Episode = ({item}) => {
    const {id, name, air_date, episode} = item

    return (
        <div>
            <div>{id}</div>
            <h3>{name}</h3>
            <div>{air_date}</div>
            <div>{episode}</div>
        </div>
    );
};

export default Episode;