import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router";
import {Link} from "react-router-dom";

import {postsService} from "../../services/services";
import "./SinglePostPage.css"

const SinglePostPage = () => {
    const {id} = useParams();
    const [singlePost, setSinglePost] = useState(null);
    const {state} = useLocation();

    useEffect(() => {
        if (state) {
            setSinglePost(state);
            return
        }
        postsService.getById(id).then(value => setSinglePost({...value}))
    }, [id])

    return (
        <div className={"post_wrap"}>
            {singlePost && (
                <div className={"post_item"}>
                    <p>{singlePost.id}</p>
                    <h5>{singlePost.title}</h5>
                    <div>{singlePost.body}</div>
                    <Link to={'comments'}>
                        <button className={"comments_btn"}>Get comments</button>
                    </Link>
                </div>
            )}
            <div className={'outlet'}><Outlet/></div>
        </div>
    );
};

export default SinglePostPage;