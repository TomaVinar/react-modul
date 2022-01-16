import React from "react";

const User = (props) => {
    const {name, username, email} = props;

    return (
        <div>
            <h6>Name: {name}</h6>
            <h5>Username: {username}</h5>
            <p>Email: {email}</p>
            <hr/>
        </div>
    );
};

export default User;