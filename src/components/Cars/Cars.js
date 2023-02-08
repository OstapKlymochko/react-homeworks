import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux/slices/carSlice";
import {Car} from "../Car/Car";
import css from '../Cars.module.css'

const Cars = () => {
    const {cars, errors, loading} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(carActions.getAll());
    }, [dispatch])
    console.log(cars);
    return (
        <>
            {loading && <h1>Loading........</h1>}
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            <div className={css.cars}>
                {!!cars.length && cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </>
    );
};

export {Cars};