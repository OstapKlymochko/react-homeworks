import React, {useContext} from 'react';

import {useForm} from "react-hook-form";
import {PetContext} from "../../context/PetProvider";

const CatForm = () => {
    const {register, handleSubmit,reset} = useForm({mode:'all'});
    // const {dispatch} = useContext(PetContext);
    const add = (cat) => {
        // dispatch({type:'addCat', payload:cat});
        console.log(cat);
        reset();
    };
    return (
            <form onSubmit={handleSubmit(add)}>
                <input type="text" placeholder={'cat name'} {...register('name')}/>
                <button onClick={()=>add()}>Save</button>
            </form>
    );
};

export {CatForm};