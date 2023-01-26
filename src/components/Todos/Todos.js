import React, {useEffect, useState} from 'react';

import {requests} from "../../services/requests";
import css from './Todos.module.css';

const Todos = () => {
    let [todos, setTodos] = useState([]);
    useEffect(() => {
        requests.getAll('todos').then(({data}) => setTodos([...data]));
    }, [])
    return (
        <div className={css.container}>
            {
                todos.map(todo => {
                    return (
                        <div key={todo.id} className={css.todo}>
                            <>
                                <h2>{todo.id} {todo.completed.toString()}</h2>
                                <p>{todo.title}</p>
                            </>
                        </div>
                    )
                })
            }
        </div>
    );
};

export {Todos};