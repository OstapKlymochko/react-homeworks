import React from 'react';

import {Header} from "../../component";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export {MainLayout};