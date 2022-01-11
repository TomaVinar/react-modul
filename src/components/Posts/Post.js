function Post (props) {
    let {id, title, body} = props;
    return (
        <div>
            <div>{id}</div>
            <h6>{title}</h6>
            <p>{body}</p>
        </div>
    )
}

export default Post