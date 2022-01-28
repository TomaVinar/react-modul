import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";

import {heroService} from "../../axios.service/services";
import Location from "../../components/Location/Location";
import css from "./LocationsPage.module.css"


const LocationsPage = () => {
    const {search} = useLocation();
    const nav = useNavigate();

    const [locations, setLocations] = useState(null);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const newPage = search ? +search.split('page=')[1] : 1;
        setPage(newPage);
        heroService.getAllLocations(newPage).then(value => setLocations(value))
    }, [search])

    if (!locations) {
        return (
            <div>
                Page not found
            </div>
        )
    }
    return (
        <div>
            <div className={css.locations}>{locations && locations.results.map(value => <Location key={value.id}
                                                                                                  location={value}/>)}
            </div>
            <div className={css.buttons_block}>
                <input type='button' value={'prev'}
                       disabled={page <= 1}
                       onClick={() => {nav(`/location?page=${page - 1}`)}}/>
                {page}
                <input type='button' value={'next'}
                       disabled={page >= locations.info.pages}
                       onClick={() => {nav(`/location?page=${page + 1}`)}}/>
            </div>
        </div>
    );
};

export default LocationsPage;