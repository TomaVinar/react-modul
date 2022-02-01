import React from "react";

const Cat = ({cat:{id, name}}) => {

    return (
        <div>
            {name}
            <button>Delete cat</button>
        </div>
    );
};

export {Cat};