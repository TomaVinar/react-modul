import {Outlet, useLocation, useParams} from "react-router";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import {postService} from "../../services/axios.service";
import "./PostPage.css"


const PostPage = () => {
    const {id} = useParams();
    const {state} = useLocation();

    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost(state);
            return
        }
        postService.getById(id).then(value => setPost(value));
    }, [state, id])

    return (
        <div className={'wrap_post'}>
            {post && (
                <div>
                    {post.id}
                    <h3>{post.title}</h3>
                    <div>{post.body}</div>
                    <Link to={'comments'} state={state}><button className={'comment_btn'}>Get comments</button></Link>
                </div>)}
            <div className={'outlet'}><Outlet/></div>
        </div>
    );
};

export default PostPage;