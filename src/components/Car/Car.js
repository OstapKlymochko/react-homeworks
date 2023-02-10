import React from 'react';
import {useDispatch} from "react-redux";

import {carActions} from "../../redux/slices/carSlice";
import {carsService} from "../../services";
import css from '../Cars.module.css'
import {useSearchParams} from "react-router-dom";

const Car = ({car}) => {
    const {id, price, brand, year} = car;
    const dispatch = useDispatch();
    const [query] = useSearchParams();
    const page = query.get('page');
    const remove = async (id) => {
        try {
            await carsService.delete(id);
            dispatch(carActions.getAll({page}));
        } catch (e) {
            console.log(e.response.data);
        }

    }
    return (
        <div className={css.car}>
            <h3>{id}. {brand}<br/> {year} {price}$</h3>
            <button onClick={() => remove(id)}>Delete</button>
            <button onClick={() => dispatch(carActions.setCarUpdate(car))}>Update</button>
        </div>
    );
};

export {Car};