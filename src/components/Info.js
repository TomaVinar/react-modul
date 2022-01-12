import {useEffect, useState} from "react";
import {getFlights} from "../services/api";
import Flight from "./Flight";

const Info = () => {

    const [flights, setFlightsList] = useState([]);

    useEffect( () => {
        getFlights()
            // .then(flights => flights.filter(item => +item.launch_year !== 2020))
            .then(flights => setFlightsList(flights))
    }, [])

    return (
        <div className={'main_div'}>
            {
                flights.map(item => +item.launch_year !== 2020
                                        ? <Flight key={item.flight_number} item={item}/>
                                        : ''
                )
            }

        </div>
    )
}

export default Info