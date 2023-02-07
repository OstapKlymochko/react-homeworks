import React from 'react';
import {Header, Users} from "./component";
import {Posts} from "./component/Posts/Posts";
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {PostsPage, UsersPage} from "./Pages";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};