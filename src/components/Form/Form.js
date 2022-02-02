import React, {useRef} from "react";
import {useForm} from "react-hook-form";

import css from "./Form.module.css"

const Form = ({dispatch}) => {
    const catField = useRef();
    const dogField = useRef();

    const {register, handleSubmit, reset, setState, formState:{isValid}} = useForm({
        mode: "onChange",
        defaultValues: {
            cat: '',
            dog: ''
        }
    });

    const onSubmit = (e) => {
        reset()
    }

    const saveCat = () => {
        dispatch({
            type: 'Add_cat',
            payload: {cat: catField.current.value}
        })
    }

    const saveDog = () => {
        dispatch({
            type: 'Add_dog',
            payload: {dog: dogField.current.value}
        })
    }

    return (
        <div className={css.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label> Add cat: <input type="text" {...register('animals.cat', {minLength: 1, required: true})} ref={catField}/></label>
                    <button onClick={()=>saveCat} disabled={!isValid}>Save cat</button>
                </div>
                <div>
                    <label> Add dog: <input type="text" {...register('dog')} ref={dogField}/> </label>
                    <button onClick={saveDog} >Save dog</button>
                </div>
            </form>
        </div>
    );
};

export {Form};