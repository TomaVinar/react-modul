import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/comments.slice";
import {Comment} from "../Comment/Comment";
import css from "./Comments.module.css"


const Comments = () => {
    const {comments} = useSelector(state => state['commentsReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, [dispatch])

    return (
        <div className={css.comments}>
            {comments.map(comment => <Comment key={comment.id}
                                              comment={comment}/>)}
        </div>
    );
};

export {Comments};