import React from 'react';

import {CatForm} from "./components/Forms/CatForm";
import {Cats} from "./components/Cats/Cats";
import {DogsForm} from "./components/Forms/DogsForm";
import {Dogs} from "./components/Dogs/Dogs";

const App = () => {
    return (
        <>
            <div style={{display:'flex'}}>
                <CatForm/>
                <DogsForm/>
            </div>
            <hr/>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                <Cats/>
                <Dogs/>
            </div>
        </>

    );
};

export {App};