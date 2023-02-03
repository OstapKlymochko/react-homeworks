import React, {useContext, useEffect} from 'react';

import {StateContext} from "../../hoc/StateProvider";
import {userActions} from "../../reducers/reducers";
import {User} from "../User/User";
import {usersServices} from "../../services/usersServices";

const Users = () => {
    const {userReducer} = useContext(StateContext);
    const [state, dispatch] = userReducer;

    useEffect(() => {
        const getUsers = async () => {
             usersServices.getAll().then(({data}) => dispatch(userActions.GET_ALL(data)));
        }
        getUsers();
    }, []);
    console.log(state);
    return (
        <div>
            {/*<button onClick={()=> }>Get Users</button>*/}
            {!!state.length && state.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};