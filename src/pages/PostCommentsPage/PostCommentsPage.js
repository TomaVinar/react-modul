import React, {useEffect, useState} from "react";
import {useParams} from "react-router";

import {commentService} from "../../services/axios.service";
import Comment from "../../components/Comment/Comment";

const PostCommentsPage = () => {
    const {postId} = useParams();

    const [comments, setComments] = useState(null);

    useEffect(() => {
        commentService.getById(postId).then(value => setComments([...value]))
    }, [postId]);

    return (
        <div>
            {comments && (
                <div>
                    {comments.map(value => <Comment key={value.id}
                                                    comment={value}/>)}
                </div>
            )}
        </div>
    );
};

export default PostCommentsPage;