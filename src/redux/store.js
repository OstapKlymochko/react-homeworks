import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer, postReducer} from "./slices";

const rootReducer = combineReducers({
    users : userReducer,
    posts : postReducer
});

const setUpStore = () => configureStore({
    reducer: rootReducer
})

export {
    setUpStore
}