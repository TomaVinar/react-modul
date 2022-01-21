import React from 'react';
import {Outlet} from "react-router";
import css from "./Layout.module.css"
import {NavLink} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
            <div className={css.outlet}><Outlet/></div>
        </div>
    );

};

export default Layout;