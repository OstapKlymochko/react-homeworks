import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const DetailsPage = () => {
    const {selectedUser} = useSelector(state => state.users);
    const {selectedPost} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    return (
        <div>
            {selectedUser && <h2>{selectedUser.name}</h2>}
            {selectedPost && <h2>{selectedUser.body}</h2>}
        </div>
    );
};

export {DetailsPage};