import React, {useEffect, useState} from 'react';
import {requests} from "../../services/requests";

const CommentsPost = ({postId}) => {
    const [post, setPost] = useState(null);
    useEffect(() => {
        requests.getById('posts', postId).then(({data}) => setPost({...data}));
    }, [postId]);

    return (
        <div>
            {
                post && <>
                    <h2>{post.id}. {post.title}</h2>
                    <p>{post.body}</p>
                </>
            }
        </div>
    );
};

export {CommentsPost};