import React, {useContext} from 'react';

import {CatForm} from "./components/Forms/CatForm";
import {Cats} from "./components/Cats/Cats";
import {PetContext} from "./context/PetProvider";

const App = () => {
    const {state} = useContext(PetContext);
    return (
        <>
            <CatForm/>
            <hr/>
            <Cats/>
            <button onClick={()=> console.log(state)}>show state</button>
        </>

    );
};

export {App};