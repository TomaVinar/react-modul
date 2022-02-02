import React from "react";

const Dog = ({dog: {id, name}, dispatch}) => {

    return (
        <div>
            {name}
            <button onClick={()=>dispatch({type: 'Delete_dog', payload: {id}})}>Delete dog</button>
        </div>
    );
};

export {Dog};