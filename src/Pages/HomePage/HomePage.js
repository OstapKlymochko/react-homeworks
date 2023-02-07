import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../../component";


const HomePage = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export {HomePage};