import React from "react";

import css from "./Comment.module.css"

const Comment = ({comment: {id, name, email, body}}) => {
    return (
        <div className={css.comment}>
            {id}
            <div><span className={css.titles}>Name: </span>{name}</div>
            <div><span className={css.titles}>Email: </span>{email}</div>
            <div><span className={css.titles}>Body: </span>{body}</div>
        </div>
    );
};

export {Comment};