import React, {useContext} from 'react';
import {useForm} from "react-hook-form";

import {PetContext} from "../../context/PetProvider";

const DogsForm = () => {
    const {register, handleSubmit,reset} = useForm({mode:'all'});
    const {dispatch} = useContext(PetContext);

    const add = (dog) => {
        dispatch({type:'ADD_DOG', payload:dog});
        reset()
    };

    return (
        <form onSubmit={handleSubmit(add)}>
            <input type="text" placeholder={'dog name'} {...register('name')}/>
            <button>Save</button>
        </form>
    );
};

export {DogsForm};