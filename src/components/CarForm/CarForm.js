import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {carActions} from "../../redux/slices/carSlice";
import {carResolver} from "../../resolvers/carResolver/carResolver";

const CarForm = () => {
    const {register, handleSubmit, setValue, formState: {errors, isValid}, reset} = useForm({
        mode: 'all',
        resolver: joiResolver(carResolver)
    });
    const {carUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        if (carUpdate) {
            setValue('brand', carUpdate.brand, {shouldValidate: true});
            setValue('year', carUpdate.year, {shouldValidate: true});
            setValue('price', carUpdate.price, {shouldValidate: true});
        }
    }, [carUpdate, setValue]);

    const submit = async (car) => {
        dispatch(carActions.create(car));
        reset();
    };

    const update = async (newCar) => {
        dispatch(carActions.update({id: carUpdate.id, updates: newCar}));
        dispatch(carActions.setCarUpdates(null));
    };

    return (
        <form onSubmit={carUpdate ? handleSubmit(update) : handleSubmit(submit)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarForm};