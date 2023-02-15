import React, {FC, useEffect, useState} from 'react';
import {ICar} from "../interfaces";
import {carServices} from "../services";
import {Car} from "./Car";

const Cars:FC = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(()=>{
        carServices.getAll().then(({data}) => setCars(data));
    },[]);

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};