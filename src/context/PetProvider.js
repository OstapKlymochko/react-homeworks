import React, {useReducer} from 'react';
import {createContext} from "react";

const PetContext = createContext(null);

const PetProvider = ({children}) => {

    const reducer = (state, action) => {
        let {cats, dogs} = state;
        switch (action.type) {
            case 'ADD_CAT':
                // console.log(action.payload);
                const lastCat = cats.slice(-1);
                const catId = lastCat.length ? lastCat[0].catId + 1 : 1;
                return {...state, cats: [...cats, {...action.payload, catId}]};

            case 'ADD_DOG':
                const lastDog = dogs.slice(-1);
                const dogId = lastDog.length ? lastDog[0].dogId + 1 : 1;
                return {...state, dogs: [...dogs, {...action.payload, dogId}]};
            case 'DELETE_CAT':
                const CatDeleteIndex = cats.findIndex(value => value.catId === action.payload);
                cats.splice(CatDeleteIndex, 1);
                cats.forEach((value, index) => value.catId = index + 1);
                return {...state, cats: [...cats]};
            case 'DELETE_DOG':
                const DogDeleteIndex = dogs.findIndex(value => value.dogId === action.payload);
                dogs.splice(DogDeleteIndex, 1);
                dogs.forEach((value, index) => value.dogId = index + 1);
                return {...state, dogs: [...dogs]};
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