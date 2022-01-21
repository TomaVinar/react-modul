import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";

import Comment from "../../components/Comment/Comment";
import {commentsService} from "../../services/services";

const CommentsPage = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState(null);

    useEffect(() => {
        commentsService.getById(postId).then(value => setComments([...value]))
    }, [postId])

    return (
        <div>
            {comments && comments.map(value =><Comment key={value.id}
                                                     comment={value}/>)}
        </div>
    );
};

export default CommentsPage;