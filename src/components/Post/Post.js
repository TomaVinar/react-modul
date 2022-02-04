import React from "react";

import css from "./Post.module.css"

const Post = ({post: {id, title, body}}) => {

    return (
        <div className={css.post}>
            {id}
            <div><span className={css.titles}>Title:</span> {title}</div>
            <div><span className={css.titles}>Body:</span> {body}</div>
        </div>
    );
};

export {Post};