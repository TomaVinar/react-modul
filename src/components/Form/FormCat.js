import {useForm} from "react-hook-form";

import css from "./Form.module.css"

const FormCat = ({dispatch}) => {

    const {register, handleSubmit, reset, formState: {isValid}} = useForm({
        mode: "onChange",
        defaultValues: {
            cat: ''
        }
    });

    const onSubmit = (e) => {
        dispatch({
            type: 'Add_cat',
            payload: {
                cat: e.cat
            }
        })
        reset()
    }

    return (
        <div className={css.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Add cat: <input type="text" {...register('cat', {minLength: 1, required: true})}/></label>
                <button disabled={!isValid}>Save cat</button>
            </form>
        </div>
    );
};

export {FormCat};