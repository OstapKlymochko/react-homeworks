import React from 'react';
import {Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {HomePage,AlbumsPage,CommentsPage,CommentsPostPage,TodosPage,NotFoundPage} from './pages'

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'albums'} element={<AlbumsPage/>}/>

                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<CommentsPostPage/>} />
                </Route>

                <Route path={'todos'} element={<TodosPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {App};