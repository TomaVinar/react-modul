import React, {useEffect, useState} from "react";

import {heroService} from "../../axios.service/services";
import Episode from "../../components/Episode/Episode";
import css from "./EpisodesPage.module.css"

const EpisodesPage = () => {
    const [episodes, setEpisodes] = useState(null);

    useEffect(() => {
        heroService.getAllEpisods().then(value => setEpisodes(value))
    }, [])

    return (
        <div className={css.episodes_block}>
            {episodes && episodes.results.map(value => <Episode key={value.id}
                                                                item={value}/>)}
        </div>
    );
};

export default EpisodesPage;