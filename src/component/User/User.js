import React from 'react';
import {useDispatch} from "react-redux";

import {userActions} from "../../redux/slices";

const User = ({user}) => {
    const {id, name, username} = user;
    const dispatch = useDispatch();
    return (
        <div>
            <h3>{id}. {name} {username}</h3>
            <button onClick={() => dispatch(userActions.setSelectedUser(user))}>Show Details</button>
            <button onClick={() => dispatch(userActions.getById(id))}>Fetch Contacts</button>
        </div>
    );
};

export {User};