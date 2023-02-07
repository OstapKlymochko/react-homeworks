import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css'

const Header = () => {
    return (
        <div className={'Header'}>
            <NavLink to={''}>Home</NavLink>
            <NavLink to={'posts'}>Posts</NavLink>
            <NavLink to={'users'}>Users</NavLink>
        </div>
    );
};

export {Header};