import React from 'react';

import {Posts} from "./components/Posts/Posts";
import {Comments} from "./components/Comments/Comments";

const App = () => {
    return (
        <div>
            <Posts/>
            <Comments/>
        </div>
    );
};

export {App};