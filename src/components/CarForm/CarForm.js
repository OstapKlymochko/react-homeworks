import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {CarValidator} from "../../validators/CarValidator";
import {carServices} from "../../services/CarServices";

const CarForm = ({setCars, updates}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all', resolver: joiResolver(CarValidator)
    })

    useEffect(() => {
        if (updates) {
            setValue('brand', updates.brand);
            setValue('year', updates.year);
            setValue('price', updates.price);
        }
    }, [updates, setValue])

    const submit = async (car) => {
        const {data} = await carServices.create(car);
        setCars(prev => [...prev, data]);
        // console.log(data);
        reset();
        if(updates){
            const {data} = await carServices.update(updates.id, car);
            console.log(data);
        }
    };
    const update = async ()=>{

    }

    return (<form onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder={'brand'} {...register('brand')}/>
        {errors.brand && <span>{errors.brand.message}</span>}
        <input type="text" placeholder={'year'} {...register('year')}/>
        {errors.year && <span>{errors.year.message}</span>}
        <input type="text" placeholder={'price'} {...register('price')}/>
        {errors.price && <span>{errors.price.message}</span>}
        <button disabled={!isValid} onClick={update}>{updates ? 'Update' : 'Submit'}</button>
        {/*<button disabled={!updates || !isValid} onClick={update}>Update</button>*/}
    </form>);
};

export {CarForm};