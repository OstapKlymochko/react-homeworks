import React from 'react';
import {carServices} from "../../services/CarServices";

const Car = ({car,setUpdates}) => {
    const {id,brand,year,price} = car;
    const deleteCar = async ()=> {
        const {data} = carServices.delete(id);
        console.log(data);
    }
    return (
        <div>
            <h2>{id}. {brand}</h2>
            <h3>{year} year {price}$</h3>
            <button onClick={()=> setUpdates(car)}>Update</button>
            <button onClick={() => deleteCar(car.id)}>Delete</button>
        </div>
    );
};

export {Car};