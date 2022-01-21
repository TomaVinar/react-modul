import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

import {postsService} from "../../services/services";
import Post from "../../components/Post/Post";
import css from "./UserPostPage.css"

const UserPostsPage = () => {
    const {id} = useParams();
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postsService.getById(id).then(value => setPosts([...value]));
    }, [id]);

    console.log(posts);
    return (
        <div>
            {posts && (
                <div className={css.posts}>
                    {posts.map(post => <Post
                        key={post.id}
                        post={post}/>)}
                </div>
            )}
        </div>
    )
};

export default UserPostsPage;