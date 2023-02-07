import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux/slices";

const Header = () => {
    const {selectedUser, loading} = useSelector(state => state.users);
    const dispatch = useDispatch();
    return (
        <div>
            {loading && <h1>Loading....</h1>}
            {selectedUser && <h1>{selectedUser.name}'s contacts:<br/>{selectedUser.phone} {selectedUser.email}</h1>}
            <button disabled={selectedUser === null} onClick={() => dispatch(userActions.setSelectedUser(null))}>Clear
            </button>
        </div>
    );
};

export {Header};