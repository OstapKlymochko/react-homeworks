import React, {useContext} from 'react';

import {CatForm} from "./components/Forms/CatForm";
import {Cats} from "./components/Cats/Cats";
import {PetContext} from "./context/PetProvider";
import {DogsForm} from "./components/Forms/DogsForm";
import {Dogs} from "./components/Dogs/Dogs";

const App = () => {
    const {state} = useContext(PetContext);
    return (
        <>
            <div style={{display:'flex'}}>
                <CatForm/>
                <DogsForm/>
            </div>
            <hr/>
            <div style={{display:'flex', justifyContent:'space-around'}}>
                {!!state.cats.length && <Cats/>}
                {!!state.dogs.length && <Dogs/>}
            </div>
        </>

    );
};

export {App};