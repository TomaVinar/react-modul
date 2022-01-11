function Comment (props) {
    let {id, name, email, body} = props;

    return (
        <div>
            <div>{id}</div>
            <h5>{name}</h5>
            <div>{email}</div>
            <p>{body}</p>
        </div>
    )
}

export default Comment