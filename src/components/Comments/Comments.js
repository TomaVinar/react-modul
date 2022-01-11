import {useEffect, useState} from "react";
import Comment from "./Comment";
import "./Comments.css"

const Comments = () => {

    let [commentsList, setCommentsList] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comments =>
                setCommentsList(comments))
    }, [])
    return (
        <div>
            {commentsList.map(comment => <Comment
            key = {comment.id}
            id = {comment.id}
            name = {comment.name}
            body = {comment.body}/>)}
        </div>
    )
}

export default Comments