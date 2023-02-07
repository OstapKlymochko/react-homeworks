import React from 'react';

const Car = ({car}) => {
    const {id, price, brand, year} = car;
    return (
        <div>
            <h3>{id}. {brand}<br/> {year} {price}$</h3>
        </div>
    );
};

export {Car};