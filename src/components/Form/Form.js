import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {createNewCar, updateItem} from "../../store/car.slice";
import {carValidation} from "../../validators/car.validation";
import css from "./Form.module.css"
import {Cars} from "../Cars/Cars";

const Form = () => {

    const {
        register, reset, handleSubmit, formState: {errors}, setValue
    } = useForm({mode: 'onChange', resolver: joiResolver(carValidation)});

    const dispatch = useDispatch();
    const {carForEdit} = useSelector(state => state['carReducer'])

    useEffect(() => {
        if (carForEdit) {
            setValue('model', carForEdit.model)
            setValue('price', carForEdit.price)
            setValue('year', carForEdit.year)
        }
    }, [carForEdit, setValue])

    const onSubmit = (data) => {
        carForEdit?.id
            ? dispatch(updateItem({data, id: carForEdit.id}))
            : dispatch(createNewCar({data}))
        reset()
    }

    return (
        <div className={css.form_cars}>
            <div className={css.form_container}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Model: <input type="text" {...register('model')}/></label>
                    {errors.model && <div>{errors.model.message}</div>}
                    <label>Price: <input type="text" {...register('price')}/></label>
                    {errors.price && <div>{errors.price.message}</div>}
                    <label>Year: <input type="text" {...register('year')}/></label>
                    {errors.year && <div>{errors.year.message}</div>}
                    <button className={css.button_form}>SAVE</button>
                </form>
            </div>
            <div>
                <Cars/>
            </div>
        </div>
)
    ;
};

export {Form};