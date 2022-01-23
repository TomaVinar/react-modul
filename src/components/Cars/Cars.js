import React, {useEffect, useState} from "react";

import Car from "../Car/Car";
import {carService} from "../../services/car.service";

const Cars = ({trigger, update, setUpdatedCar}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]));
    }, [trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id}
                                  car={car}
                                  update={update}
                                  setUpdatedCar={setUpdatedCar}/>)}
        </div>
    );
};

export default Cars;