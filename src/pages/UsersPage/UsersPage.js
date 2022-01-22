import React, {useEffect, useState} from "react";
import {Outlet} from "react-router";

import User from "../../components/User/User";
import {userService} from "../../services/axios.service";
import css from "./UsersPage.module.css"

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        userService.getAll().then(value => setUsers([...value]))
    }, [])

    return (
        <div className={css.wrap}>
            <div className={css.users}>
                <h2>All users</h2>
                {
                    users.map(item => <User key={item.id} user={item}/>)
                }
            </div>
            <div className={css.outlet}><Outlet/></div>
        </div>
    );
};

export default UsersPage;