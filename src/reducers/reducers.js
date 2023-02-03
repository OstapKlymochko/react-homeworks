// import {usersServices} from "../services/usersServices";

// import {usersServices} from "../services/usersServices";

const userActionsType = {
    GET_ALL: 'GET_ALL',
    ADD: 'ADD',
    DELETE_BY_ID: 'DELETE_BY_ID',
    UPDATE: 'UPDATE',
}
const userActions = {
    GET_ALL: (item) => ({type: userActionsType.GET_ALL, payload: item}),
    ADD: (item) => ({type: userActionsType.ADD, payload: item}),
    DELETE_BY_ID: (id) => ({type: userActionsType.DELETE_BY_ID, payload: id}),
    UPDATE: (item) => ({type: userActionsType.UPDATE, payload: item})
}

const initState = () => [];

const myUserReducer = async (state, action) => {
    switch (action.type) {
        case userActionsType.GET_ALL:
            return action.payload;
        case userActionsType.ADD:
            // usersServices.create();
            return [...state, action.payload];
        default:
            return state
    }
}

export {
    myUserReducer,
    userActions,
    initState
}
