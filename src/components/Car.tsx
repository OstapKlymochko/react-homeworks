import React, {FC, ReactNode} from 'react';
import {ICar} from "../interfaces";

interface IProps {
    car: ICar;
    children?: ReactNode;
}

const Car: FC<IProps> = ({car}) => {
    const {id, year, price, brand} = car;

    return (
        <div>
            <h3>{id}. {brand}<br/>{year} {price}$</h3>
        </div>
    );
};

export {Car};