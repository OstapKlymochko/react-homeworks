import React, {useContext} from 'react';
import {useForm} from "react-hook-form";
import {usersServices} from "../../services/usersServices";
import {StateContext} from "../../hoc/StateProvider";

const UserForm = () => {
    const {register, handleSubmit, reset} = useForm({mode: 'all'});
    const {userReducer} = useContext(StateContext);
    const [state,dispatch] = userReducer;

    const submit = async (name) => {
        const lastElem = state.slice(-1);
        const newUserId = lastElem === [] ? 1 : lastElem[0].id;
        const newUser = {
            id: newUserId,
            name: name,
            username: null,
            email: null,
            address: null,
            phone:null,
            website:null,
            company:null
        }
        const res = await usersServices.create(newUser);
        console.log(res);
        dispatch(usersServices.create(res.data));
        reset();
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <button>Save</button>
        </form>
    );
};

export {UserForm};