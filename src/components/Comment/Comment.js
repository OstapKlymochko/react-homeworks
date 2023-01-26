import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './Comments.module.css'

const Comment = ({comment}) => {
    const navigate = useNavigate();
    const {id,postId, name, body} = comment;
    const eventClick = () =>{
        navigate(postId.toString());
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }
    return (
        <div className={css.comment}>
            <h2>{id}. {name}</h2>
            <p>{body}</p>
            <button onClick={eventClick}>Get current comment's post</button>
        </div>
    );
};

export {Comment};