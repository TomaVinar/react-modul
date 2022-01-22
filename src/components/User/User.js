import React from "react";
import {Link} from "react-router-dom";

import "./User.css"

const User = ({user}) => {
    const {id, name, userName, email} = user

    return (
        <div className={'wrap_user'}>
            <div>Id: {id}</div>
            <h4>Name: {name}</h4>
            <div>Username: {userName}</div>
            <div>Email: {email}</div>
            <Link to={id.toString()}>
                <button className={'user_button'}>More</button>
            </Link>
        </div>
    );
};

export default User;