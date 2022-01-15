import './User.css'

const User = ({user: {id, name, email}, getUserId}) => {

    return (
        <div className={'user_block'}>
            <div>
                {id}
                {name}
                {email}
            </div>
            <button onClick={() => getUserId(id)}> User Details </button>
        </div>
    )
}

export default User