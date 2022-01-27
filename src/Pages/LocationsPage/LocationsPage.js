import React, {useEffect, useState} from "react";

import {heroService} from "../../axios.service/services";
import Location from "../../components/Location/Location";
import css from "./LocationsPage.module.css"

const LocationsPage = () => {

    const [locations, setLocations] = useState(null);

    useEffect(() => {
        heroService.getAllLocations().then(value => setLocations(value))
    }, [])


    return (
        <div className={css.locations}>
            {locations && locations.results.map(value => <Location key={value.id}
                                                                   location={value}/>)}
        </div>
    );
};

export default LocationsPage;