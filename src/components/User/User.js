import React from "react";

import css from "./User.module.css"
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username, email} = user

    return (
        <div className={css.user}>
            <div className={css.content}>
                {id} - {name}
                <div>{username}</div>
                <div>{email}</div>
            </div>
            <div className={css.buttons}><Link to={id.toString()}>
                <button className={css.details}>Details</button>
            </Link>
                <Link to={id.toString() + '/albums'}>
                    <button className={css.btn_albums}>User albums</button>
                </Link>
            </div>
        </div>
    );
};

export default User;