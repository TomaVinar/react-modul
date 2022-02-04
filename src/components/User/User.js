import React from "react";

import css from "./User.module.css"

const User = ({user: {id, name, username, email}}) => {
    return (
        <div className={css.user}>
            {id}
            <div>{name}</div>
            <div>{username}</div>
            <div>{email}</div>
        </div>
    );
};

export {User};