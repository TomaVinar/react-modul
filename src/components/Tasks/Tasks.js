import {useSelector} from 'react-redux';
import {Task} from '../Task/Task';
import css from './Tasks.module.css'

const Tasks = () => {
    const {tasks} = useSelector(state => state['taskReducer']);

    return (
        <div>
            <ul className={css.list}>
                {tasks.map(task => <Task key={task.id}
                                             task={task}/>)}
            </ul>
        </div>
    );
};

export {Tasks};