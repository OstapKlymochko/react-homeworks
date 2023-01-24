import React from 'react';
import {Car} from "../Car/Car";

const Cars = ({cars,setUpdates}) => {
    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car} setUpdates={setUpdates}/>)
            }
        </div>
    );
};

export {Cars};