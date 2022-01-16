import User from "../User/User"

const Users = ({users}) => {

    return (
        <div>
            {users.map(value => <User
                key={value.id}
                name={value.name}
                username={value.username}
                email={value.email}
            />)}
        </div>
    );
};

export default Users;