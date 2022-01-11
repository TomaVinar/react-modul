import {useEffect, useState} from "react";
import Post from "./Post";

const Posts = () => {

    let [postList, setPostList] = useState([]);

    useEffect( () => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then( response => response.json())
                .then(posts =>
                    setPostList(posts));
        }, []);
    return (
        <div>
            {postList.map(item => <Post
                key = {item.id}
                id = {item.id}
                title = {item.title}
                body = {item.body}
            />)}
        </div>
    )
}

export default Posts