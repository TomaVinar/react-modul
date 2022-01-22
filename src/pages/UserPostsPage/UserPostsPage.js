import React, {useEffect, useState} from "react";
import {useParams} from "react-router";

import {postService} from "../../services/axios.service";
import Post from "../../components/Post/Post";

const UserPostsPage = () => {
    const {id} = useParams();

    const [userPosts, setUserPosts] = useState(null);

    useEffect(() => {
        postService.getById(id).then(value => setUserPosts([...value]))
    }, [id])

    return (
        <div>
            {userPosts && (
                <div>
                    {userPosts.map(value => <Post key={value.id}
                                                  post={value}/>)}
                </div>
            )}
        </div>
    );
};

export default UserPostsPage;