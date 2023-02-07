import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {userActions} from "../../redux/slices";
import {useNavigate} from "react-router-dom";

const Header = () => {
    // const {selectedUser, loading} = useSelector(state => state.users);
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <div>
            {/*{loading && <h1>Loading....</h1>}*/}
            {/*{selectedUser && <h1>{selectedUser.name}'s contacts:<br/>{selectedUser.phone} {selectedUser.email}</h1>}*/}
            {/*<button disabled={selectedUser === null} onClick={() => dispatch(userActions.setSelectedUser(null))}>Clear*/}
            {/*</button>*/}
            <h3 onClick={navigate('/users')}>Posts</h3>
            <h3 onClick={navigate()}>Users</h3>
        </div>
    );
};

export {Header};