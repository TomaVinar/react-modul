import React from "react";

import "./Comment.css"

const Comment = ({comment}) => {
    const {id, name, email, body} = comment

    return (
        <div className={'wrap_comment'}>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Text: {body}</div>
        </div>
    );
};

export default Comment;