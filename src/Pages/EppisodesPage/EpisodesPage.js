import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router";

import {heroService} from "../../axios.service/services";
import Episode from "../../components/Episode/Episode";
import css from "./EpisodesPage.module.css"

const EpisodesPage = () => {
    const {search} = useLocation();
    const navigate = useNavigate();

    const [episodes, setEpisodes] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const newPage = search ? +search.split('page=')[1] : 1;
        setCurrentPage(newPage);
        heroService.getAllEpisodes(newPage).then(value => setEpisodes(value))
    }, [search])

    if (!episodes) {
        return (
            <div>
                Page not found
            </div>
        )
    }
    return (
        <div>
            <div className={css.episodes_block}>
                {episodes && episodes.results.map(value => <Episode key={value.id}
                                                                    item={value}/>)}
            </div>
            <div className={css.nav_buttons}>
                <input type='button' value={'prev'} disabled={currentPage <= 1}
                       onClick={() => {navigate(`/episode?page=${currentPage - 1}`)}}/>
                {currentPage}
                <input type='button' value={'next'} disabled={currentPage >= episodes.info.pages}
                       onClick={() => {navigate(`/episode?page=${currentPage + 1}`)}}/>
            </div>
        </div>
    );
};

export default EpisodesPage;