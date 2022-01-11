
function User (props) {
    let {name, id, age} = props;

    return (
        <div>
            <div>{id}</div>
            <h4>{name}</h4>
            <h6>{age}</h6>
            <p>{email}</p>
            <div>{phone}</div>
            <div>{city} {street} {suite} {zipcode}</div>
            <p>{website}</p>
            <div>{lat} {lng}</div>
            <div>{companyName} {catchPhrase} {bs}</div>
        </div>
    );
}

export default User;