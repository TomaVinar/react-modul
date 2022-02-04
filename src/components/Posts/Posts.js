import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getAllposts} from "../../store/posts.slice";
import {Post} from "../Post/Post"
import css from "./Posts.module.css"

const Posts = () => {
    const {posts} = useSelector(state => state['postsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllposts())
    }, [dispatch])

    return (
        <div className={css.posts}>
            {posts.map(post => <Post key={post.id}
                                     post={post}/>)}
        </div>
    );
};

export {Posts};