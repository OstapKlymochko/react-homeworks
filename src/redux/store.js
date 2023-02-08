import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {carReducer} from "./slices/carSlice";

const rootReducer = combineReducers({
    cars : carReducer
});

const setUpStore = () => configureStore({
    reducer : rootReducer
});

export {
    setUpStore
}