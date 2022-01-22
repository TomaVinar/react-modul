import React from "react";
import {Link} from "react-router-dom";

import "./Post.css"

const Post = ({post}) => {
    const {id, title} = post

    return (
        <div className={'wrap'}>
            <div className={'post_content'}>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
            </div>
            <Link to={id.toString()} state={post}>
                <button className={'post_button'}>Get all info</button>
            </Link>
        </div>
    );
};

export default Post;