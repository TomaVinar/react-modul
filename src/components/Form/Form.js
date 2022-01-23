import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from "../../services/car.service";
import {CarValidator} from "../../validators/car.validator";
import {useEffect} from "react";
import "./Form.css"

const Form = ({update, updatedCar: {id, model, price, year}}) => {

    const {
        register, handleSubmit, formState: {errors}, setValue
    } = useForm({resolver: joiResolver(CarValidator), mode: 'onChange'});

    useEffect(() => {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    }, [id])

    const submit = async (data) => {
        try {
            let newCar;
            if (id) {
                newCar = await carService.updateById(id, data)
            } else {
                newCar = await carService.create(data);
            }
            update(newCar);
        } catch (error) {
        }
    }

    return (
        <div className={'wrap'}>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Model: <input type="text" defaultValue={''} {...register('model')}/></label>
                    {errors.model && <div>{errors.model.message}</div>}
                </div>
                <div>
                    <label>Price: <input type="text" defaultValue={''} {...register('price')}/></label>
                    {errors.price && <div>{errors.price.message}</div>}
                </div>
                <div>
                    <label>Year: <input type="text" defaultValue={''} {...register('year')}/></label>
                {errors.year && <div>{errors.year.message}</div>}
                </div>
                <button>{id ? 'Update' : 'Create'}</button>
            </form>
        </div>
    );
};

export default Form;