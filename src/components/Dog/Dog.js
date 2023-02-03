import React, {useContext} from 'react';

import {PetContext} from "../../context/PetProvider";

const Dog = ({dog}) => {
    const {dogId, name} = dog;
    const {dispatch} = useContext(PetContext);
    return (
        <div>
            <h3>{dogId} {name}</h3>
            <button onClick={()=> dispatch({type:'DELETE_DOG', payload:dogId})}>Delete</button>
        </div>
    );
};

export {Dog};