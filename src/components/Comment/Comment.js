import React from 'react';

const Comment = ({comment}) => {
    const {id, postId, name, email, body} = comment

    return (
        <div className={"comment_container"}>
            {id} - {postId}
            <div>{name}</div>
            <div>{email}</div>
            <div>{body}</div>
        </div>
    );
};

export default Comment;