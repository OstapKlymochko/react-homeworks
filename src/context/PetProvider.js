import React, {useReducer} from 'react';

import {createContext} from "react";

const PetContext = createContext(null);

const PetProvider = ({children}) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'addCat':
                console.log(action.payload);
                return {...state};
            default:
                return {...state}
        }
    };

    const initValue = () => (
        {cats: [], dogs: []});

    const [state, dispatch] = useReducer(reducer, null, initValue);
    return (
        <div>
            <PetContext.Provider value={{state, dispatch}}>
                {children}
            </PetContext.Provider>
        </div>
    );
};

export {PetProvider, PetContext};