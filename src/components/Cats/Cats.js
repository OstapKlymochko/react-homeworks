import React, {useContext} from 'react';
import {PetContext} from "../../context/PetProvider";
import {Cat} from "../Cat/Cat";

const Cats = () => {
    const {state} = useContext(PetContext);
    return (
        <div>
            {state.cats.map(val => <Cat key={val.catId} cat={val}/>)}
        </div>
    );
};

export {Cats};