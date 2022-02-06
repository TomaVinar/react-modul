import React from 'react';
import {useDispatch} from 'react-redux';

import {deleteTask, toggleTask} from '../../store/task.slice';
import css from './Task.module.css'

const Task = ({task: {id, todo, completed}}) => {

    const dispatch = useDispatch();

    return (
            <li className={css.list_item}>
                <input type="checkbox" checked={completed} onChange={()=> dispatch(toggleTask({id}))}/>
                <span>{todo}</span>
                <button onClick={()=> dispatch(deleteTask({id}))}>Delete</button>
            </li>
    );
};

export {Task};