import React, {useEffect, useState} from 'react';

import {Cars, CarForm} from "./components";
import {carServices} from "./services/CarServices";

const App = () => {
    let [cars, setCars] = useState([]);
    const [updates, setUpdates] = useState(null);
    useEffect(() => {
        carServices.getAll().then(({data}) => setCars([...data]));
    }, [cars])

    return (
        <div>
            <CarForm setCars={setCars} updates={updates} setUpdates={setUpdates}/>
            <hr/>
            <Cars cars={cars} setUpdates={setUpdates}/>
        </div>
    );
};

export {App};