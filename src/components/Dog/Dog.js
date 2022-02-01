import React from "react";

const Dog = ({dog: {id, name}}) => {

    return (
        <div>
            {name}
            <button>Delete dog</button>
        </div>
    );
};

export {Dog};