import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux/slices";
import {User} from "../User/User";

const Users = () => {
    const {users, errors,selectedUser} = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.getAll())
    }, [dispatch]);

    console.log(users);

    return (
        <div>
            {selectedUser && <h1>{selectedUser.name}</h1>}
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            {!!users.length && users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};