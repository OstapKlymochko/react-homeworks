import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {CarValidator} from "../../validators/CarValidator";
import {carServices} from "../../services/CarServices";

const CarForm = ({setCars, updates, setUpdates}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all', resolver: joiResolver(CarValidator)
    })


    const submit = async (car) => {
        const {data} = await carServices.create(car);
        if (Object.keys(data).length) {
            const {data} = await carServices.getAll();
            setCars([...data]);
        }
        reset()
    };

    useEffect(() => {
        if (updates) {
            setValue('brand', updates.brand);
            setValue('price', updates.price);
            setValue('year', updates.year);
        }
    }, [updates, setValue]);

    const update = async (car) => {
        try{
            const {data} = await carServices.update(updates.id, car);
            if(Object.keys(data).length){
                const {data} = await carServices.getAll();
                setCars([...data]);
            }
        }
        catch (e){
            console.warn(e);
        }

        setUpdates(null);
        reset();
    }

    return (<form onSubmit={updates ? handleSubmit(update) : handleSubmit(submit)}>
        <input type="text" placeholder={'brand'} {...register('brand')}/>
        {errors.brand && <span>{errors.brand.message}</span>}
        <input type="text" placeholder={'year'} {...register('year')}/>
        {errors.year && <span>{errors.year.message}</span>}
        <input type="text" placeholder={'price'} {...register('price')}/>
        {errors.price && <span>{errors.price.message}</span>}
        <button disabled={!isValid}>{updates ? 'Update' : 'Submit'}</button>
        {/*<button disabled={!updates || !isValid} onClick={update}>Update</button>*/}
    </form>);
};

export {CarForm};