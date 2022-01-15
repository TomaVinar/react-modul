import React, {useEffect, useState} from 'react';

import Post from '../Posts/Post'
import {userService} from "../../services/users.service";

const Posts = ({userId}) => {

    const [posts, setPosts] = useState([]);

    useEffect ( () => {
        userService.getPostById(userId)
            .then(posts => setPosts(posts));
    }, [userId])
    console.log(posts);
    return (
        <div>
            {
                posts.map(item => <Post
                key = {item.id}
                userId = {item.userId}
                titel = {item.title}
                body = {item.body}
            />)
            }
        </div>
    );
};

export default Posts;