import React from 'react';

import {Car} from "../Car/Car";

const Cars = ({cars,setUpdates, setCars}) => {
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car} setUpdates={setUpdates} setCars={setCars}/>)
            }
        </div>
    );
};

export {Cars};