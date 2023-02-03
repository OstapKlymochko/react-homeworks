import React, {createContext, useReducer} from 'react';

import {initState, myUserReducer} from "../reducers/reducers";

const StateContext = createContext(null);
const StateProvider = ({children}) => {

    const reducers = {
        userReducer : useReducer(myUserReducer, null, initState)
    }

    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {StateProvider,StateContext};