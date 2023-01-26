import React from 'react';
import {NavLink} from "react-router-dom";

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.Header}>
                <NavLink to={""}>Home</NavLink>
                <NavLink to={"albums"}>albums</NavLink>
                <NavLink to={'comments'}>comments</NavLink>
                <NavLink to={'todos'}>todos</NavLink>
            </div>
        </div>
    );
};

export {Header};