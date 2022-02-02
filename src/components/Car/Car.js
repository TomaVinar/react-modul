import React from "react";
import {useDispatch} from "react-redux";

import {deleteItem, setCarForEdit} from "../../store/car.slice";
import css from "./Car.module.css"

const Car = ({car, car: {id, model, price, year}}) => {
    const dispatch = useDispatch();

    return (
        <div className={css.car_block}>
            {model}
            <div>{price}</div>
            <div>{year}</div>
            <div className={css.car_buttons}>
                <button onClick={() => dispatch(deleteItem({id}))}>Delete</button>
                <button onClick={() => dispatch(setCarForEdit({car}))}>Update</button>
            </div>
        </div>
    );
};

export {Car};