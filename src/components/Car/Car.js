import React from "react";
import {useDispatch} from "react-redux";

import {deleteItem, setCarForEdit, updateItem} from "../../store/car.slice";

const Car = ({car, car: {id, model, price, year}}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {model}
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={() => dispatch(deleteItem({id}))}>Delete</button>
            <button onClick={() => dispatch(setCarForEdit({car}))}>Update</button>
        </div>
    );
};

export {Car};