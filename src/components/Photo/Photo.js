import React from "react";

import "./Photo.css"

const Photo = ({photo}) => {
    const {id, title, url} = photo

    return (
        <div className={"wrap"}>
            <div>{id} - {title}</div>
            <img src={url} alt=""/>
        </div>
    );
};

export default Photo;