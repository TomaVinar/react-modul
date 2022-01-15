import React from 'react';

const Post = ({userId, title, body}) => {
    return (
        <div>
            {userId} -- {title} -- {body}
        </div>
    );
};

export default Post;