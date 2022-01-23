import React from "react";

import {carService} from "../../services/car.service";
import "./Car.css"

const Car = ({car, update, setUpdatedCar}) => {
    const {id, model, price, year} = car

    const deletedCar = async () => {
        try {
            await carService.deleteById(id);
            update({});
        } catch (error) {
        }
    }

    return (
        <div className={'cars_container'}>
            <div className={'content'}>
                <div>Id - {id}</div>
                <h5>Model - {model}</h5>
                <div>Price - {price}</div>
                <div>Year - {year}</div>
            </div>
            <div className={'buttons'}>
                <button onClick={() => {deletedCar()}}>Delete</button>
                <button onClick={() => {setUpdatedCar(car)}}>Update</button>
            </div>
        </div>
    );
};

export default Car;