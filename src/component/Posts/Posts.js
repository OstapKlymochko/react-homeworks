import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {postActions} from "../../redux/slices";
import {Post} from "../Post/Post";

const Posts = () => {
    const {posts} = useSelector(state => state.posts);
    const dispatch = useDispatch();
    // debugger;
    useEffect(()=>{
        dispatch(postActions.getAllPosts());
    },[dispatch]);
    console.log(posts);
    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};