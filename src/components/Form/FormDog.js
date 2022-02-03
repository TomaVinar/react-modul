import React from "react";
import {useForm} from "react-hook-form";

const FormDog = ({dispatch}) => {

    const {register, formState: {isValid}, handleSubmit, reset} = useForm({
        mode: 'onChange',
        defaultValues: {
            dog: ''
        }
    });

    const onSubmit = (e) => {
        dispatch({
            type: 'Add_dog',
            payload: {
                dog: e.dog
            }
        })
        reset();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Add dog: <input type="text" {...register('dog', {minLength: 1, required: true})}/></label>
                <button disabled={!isValid}>Save</button>
            </form>
        </div>
    );
};

export default FormDog;