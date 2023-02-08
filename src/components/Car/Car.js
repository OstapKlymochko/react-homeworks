import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux/slices/carSlice";
import {carsService} from "../../services";
import css from '../Cars.module.css'

const Car = ({car}) => {
    const {id, price, brand, year} = car;
    const dispatch = useDispatch();
    const remove = async (id) => {
        try {
            await carsService.delete(id);
            dispatch(carActions.getAll());
        } catch (e) {
            console.log(e.response.data);
        }

    }
    return (
        <div className={css.car}>
            <h3>{id}. {brand}<br/> {year} {price}$</h3>
            <button onClick={() => remove(id)}>Delete</button>
            <button onClick={() => dispatch(carActions.setCarUpdates(car))}>Update</button>
        </div>
    );
};

export {Car};