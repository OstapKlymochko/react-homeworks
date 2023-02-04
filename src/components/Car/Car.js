import React from 'react';

import {carServices} from "../../services/CarServices";

const Car = ({car,setUpdates, setCars}) => {
    const {id,brand,year,price} = car;

    const update = ()=>{
        setUpdates(car);
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    }

    const deleteCar = async (id) => {
        try{
            await carServices.delete(id);
        }
        catch (e){
            console.warn(e);
        }
        const {data} = await carServices.getAll();
        setCars([...data]);
    };

    return (
        <div>
            <h2>{id}. {brand}</h2>
            <h3>{year} year {price}$</h3>
            <button onClick={update}>Update</button>
            <button onClick={() => deleteCar(car.id)}>Delete</button>
        </div>
    );
};

export {Car};