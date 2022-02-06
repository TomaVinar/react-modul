import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';

import {addTask} from '../../store/task.slice';

const Form = () => {

    const {register, formState: {isValid}, reset, handleSubmit} = useForm({
        mode: 'onChange', default: {
            task: ''
        }
    })

    const dispatch = useDispatch();

    const onSubmit = (todo) => {
        dispatch(addTask({todo}));
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Add task: <input type="text" placeholder={'Enter new task'}
                                         {...register('todo', {minLength: 2, required: true})}/>
                </label>
                <button disabled={!isValid}>SAVE</button>
            </form>
        </div>
    );
};

export {Form};