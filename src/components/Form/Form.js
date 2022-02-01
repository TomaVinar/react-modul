import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {createNewCar, updateItem} from "../../store/car.slice";

const Form = () => {

    const {register, reset, handleSubmit, setValue} = useForm();
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Model: <input type="text" {...register('model')}/></label>
                <label>Price: <input type="text" {...register('price')}/></label>
                <label>Year: <input type="text" {...register('year')}/></label>
                <button>SAVE</button>
            </form>
        </div>
    );
};

export {Form};