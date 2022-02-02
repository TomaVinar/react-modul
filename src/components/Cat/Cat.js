import React from "react";

const Cat = ({cat:{id, name}, dispatch}) => {

    return (
        <div>
            {name}
            <button onClick={()=>dispatch({type: 'Delete_cat', payload: {id}})}>Delete cat</button>
        </div>
    );
};

export {Cat};