import React, {useEffect, useState} from 'react';

import {requests} from "../../services/requests";
import css from '../Comment/Comments.module.css'
import {Comment} from "../Comment/Comment";

const Comments = () => {
    let [comments, setComments] = useState([]);
    useEffect(() => {
        requests.getAll('comments').then(({data}) => setComments([...data]));
    }, [])
    return (
        <div className={css.container}>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};