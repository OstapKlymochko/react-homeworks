import React, {useContext} from 'react';
import {PetContext} from "../../context/PetProvider";
import {Dog} from "../Dog/Dog";

const Dogs = () => {

    const {state} = useContext(PetContext);
    return (
        <div>
            {state.dogs.map(val => <Dog key={val.dogId} dog={val}/>)}
        </div>
    );
};

export {Dogs};