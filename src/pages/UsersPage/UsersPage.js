import React from 'react';

import {Users} from "../../components/Users/Users";
import {UserForm} from "../../components/UserForm/UserForm";

const UsersPage = () => {
    return (
        <>
            <UserForm/>
            <hr/>
            <Users/>
        </>
    );
};
export {UsersPage};