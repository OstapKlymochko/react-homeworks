import React from 'react';
import {useParams} from "react-router-dom";

import {CommentsPost} from "../../components";

const CommentsPostPage = () => {
    const {postId} = useParams();
    return (
        <div>
            <CommentsPost postId={postId}/>
        </div>
    );
};

export {CommentsPostPage};