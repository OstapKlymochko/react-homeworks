import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {PetContext} from "../../context/PetProvider";

const DogsForm = () => {
    const {register, handleSubmit} = useForm({mode:'all'});
    // const {dispatch} = useContext(PetContext);

    const add = () => {
        // dispatch()
    };

    return (
        <form onSubmit={handleSubmit(add)}>
            <input type="text" placeholder={'dog name'} {...register('dog')}/>
            <button onClick={add}>Save</button>
        </form>
    );
};

export {DogsForm};