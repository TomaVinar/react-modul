import React, {useEffect, useState} from "react";
import {Outlet} from "react-router";

import {postService} from "../../services/axios.service";
import Post from "../../components/Post/Post";
import "./PostsPage.css"

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])

    return (
        <div className={'wrap'}>
            <div className={'posts_container'}>
                <h2>All posts</h2>
                {posts.map(value => <Post key={value.id}
                                          post={value}/>)}
            </div>
            <div className={'outlet'}><Outlet/></div>
        </div>
    );
};

export default PostsPage;