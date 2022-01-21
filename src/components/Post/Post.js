import React from "react";
import {Link} from "react-router-dom";

import "./Post.css"

const Post = ({post}) => {
    const {id, title} = post

    return (
        <div className={"post"}>
            <div>{id} - {title}</div>
            <Link to={id.toString()} state={post}><button className={"secondary_button"}>Post details</button></Link>
        </div>
    );
};

export default Post;