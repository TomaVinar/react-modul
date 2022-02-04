import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllUsers} from "../../store/users.slice"
import {User} from "../User/User";
import css from "./Users.module.css"

const Users = () => {
    const {users} = useSelector(state => state['usersReducer'])
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    return (
        <div className={css.users_block}>
            {users.map(user => <User key={user.id}
                                     user={user}/>)}
        </div>
    )
}


export {Users}