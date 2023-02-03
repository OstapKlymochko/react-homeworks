import React, {useContext} from 'react';

import {PetContext} from "../../context/PetProvider";

const Cat = ({cat}) => {
    const {catId, name} = cat;
    const {dispatch} = useContext(PetContext);
    return (
        <div>
            <h3>{catId} {name}</h3>
            <button onClick={()=> dispatch({type:'DELETE_CAT', payload:catId})}>Delete</button>
        </div>
    );
};

export {Cat};