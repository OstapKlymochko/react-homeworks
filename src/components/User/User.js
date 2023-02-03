import React from 'react';

const User = ({user}) => {
    const {id, name} = user;
    return (
            <h3>{id}. {name}</h3>
    );
};

export {User};