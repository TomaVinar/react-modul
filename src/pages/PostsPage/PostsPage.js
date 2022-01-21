import React, {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {postsService} from "../../services/services";
import Post from "../../components/Post/Post";
import "./PostsPage.css"

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(posts => setPosts([...posts]))
    }, [])

    return (
        <div className={"content"}>
            <div className={"all_posts"}>
                <h2>All posts</h2>
                {posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
            <div className={"outlet"}><Outlet/></div>
        </div>

    );
};

export default PostsPage;