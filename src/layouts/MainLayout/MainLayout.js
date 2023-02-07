import React from 'react';

import {Header} from "../../component";
import {DetailsPage} from "../../Pages";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <Header/>
            <DetailsPage/>
            <Outlet/>
        </>
    );
};

export {MainLayout};