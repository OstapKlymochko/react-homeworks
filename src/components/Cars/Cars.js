import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux/slices/carSlice";
import {Car} from "../Car/Car";
import css from '../Cars.module.css'
import {useSearchParams} from "react-router-dom";

const Cars = () => {
    const {cars, errors, loading, prev, next} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(carActions.getAll({page: query.get('page')}));
    }, [dispatch, query])
    console.log(cars);
    return (
        <>
            {loading && <h1>Loading........</h1>}
            {errors && <h1>{JSON.stringify(errors)}</h1>}
            <div>
                <button disabled={!prev} onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>prev
                </button>
                <button disabled={!next} onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>next
                </button>
            </div>
            <div className={css.cars}>
                {!!cars.length && cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </>
    );
};

export {Cars};