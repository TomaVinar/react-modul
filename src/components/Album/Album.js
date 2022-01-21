import React from "react";
import {Link} from "react-router-dom";

import "./Album.css"

const Album = (props) => {
    const {userId, id, title} = props

    return (
        <div className={"album"}>
            <div>
                <div>UserId - {userId}</div>
                {id} - {title}
            </div>
            <Link to={id.toString() + '/photos'}>
                <button className={"btn"}>Photos</button>
            </Link>
        </div>
    );
};

export default Album;