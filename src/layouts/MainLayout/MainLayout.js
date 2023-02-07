import React from 'react';
import {Outlet} from "react-router-dom";
import {HomePage} from "../../Pages/HomePage/HomePage";

const MainLayout = () => {
    return (
        <>
            <HomePage/>
            <Outlet/>
        </>
    );
};

export {MainLayout};