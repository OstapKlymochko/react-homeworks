import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {AuthRequireLayout, MainLayout} from "./layouts";
import {CarPage, RegisterPage} from "./pages";
import {LogInPage} from "./pages/LogInPage/LogInPage";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'/cars'}/>}/>

                <Route element={<AuthRequireLayout/>}>
                    <Route path={'cars'} element={<CarPage/>}/>
                </Route>

                <Route path={'login'} element={<LogInPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
            </Route>

        </Routes>
    );
};

export {App};