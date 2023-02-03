import React from 'react';
import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout/MainLayout";
import {HomePage} from "./pages/HomePage/HomePage";
import {UsersPage} from "./pages/UsersPage/UsersPage";

const App = () => {
    return (
    <Routes>
        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'users'} element={<UsersPage/>}/>
        </Route>
    </Routes>
    );
};

export {App};