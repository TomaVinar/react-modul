import React from 'react';

const Cat = ({cat}) => {

    const {id, name} =cat
    return (
        <div>
            {name}
            <button>DELETE</button>
        </div>
    );
};

export default Cat;