import React from "react";
import {NavLink, Outlet} from "react-router-dom";

import css from "./Layout.module.css"

const Layout = () => {
    return (
        <div>
            <div className={css.header}>
                <div className={css.menu}>
                    <NavLink to={'/form'}>Автомобілі</NavLink>
                    <NavLink to={'/users'}>Користувачі</NavLink>
                    <NavLink to={'/posts'}>Пости</NavLink>
                    <NavLink to={'/comments'}>Коментарі</NavLink>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {Layout};