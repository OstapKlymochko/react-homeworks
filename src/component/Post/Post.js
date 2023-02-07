import React from 'react';
import {useDispatch} from "react-redux";

import {postActions} from "../../redux/slices";

const Post = ({post}) => {
    const {id, title} = post;
    const dispatch = useDispatch();
    return (
        <div>
            <h2>{id}. {title}</h2>
            <button onClick={() => {
                dispatch(postActions.getPostById(id));
                window.scrollTo({
                    top:0,
                    behavior:'smooth'
                })
            }}>Fetch Details
            </button>
        </div>
    );
};

export {Post};