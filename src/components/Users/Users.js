import {useEffect, useState} from "react";

import {userService} from "../../services/users.service";
import User from "../User/User"
import "./Users.css"

const Users = ({getUserId}) => {
    const [usersList, setUsersList] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(users => setUsersList(users));
    }, []);

    return (
        <div>
            <div className={'user_container'}>
                {
                    usersList && usersList.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)
                }
            </div>
        </div>
    )
}

export default Users