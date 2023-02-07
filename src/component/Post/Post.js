import React from 'react';

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div>
            <h2>{id}. {title}</h2>
            <button></button>
        </div>
    );
};

export {Post};