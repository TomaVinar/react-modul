import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../services";

export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return carService.getAll();
        } catch (e) {
            return rejectWithValue(e.message)
        }
    })

export const createNewCar = createAsyncThunk(
    'carSlice/createNewCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data)
            dispatch(addCar(newCar))
        } catch (e) {
            console.log(e);
        }
    }
)

export const updateItem = createAsyncThunk(
    'carSlice/updateCar',
    async ({id, data}, {dispatch}) => {
        try {
            const updatedCar = await carService.updateById(id, data)
            dispatch(updateCar({updatedCar}))
        } catch (e) {
            console.log(e);
        }
    }
)

export const deleteItem = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id)
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e);
        }
    }
)


const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        carForEdit: null,
        cars: [],
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push({...action.payload.data})
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        setCarForEdit: (state, action) => {
            state.carForEdit = action.payload.car
        },
        updateCar: (state, action) => {

        }
    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const carReducer = carSlice.reducer

export const {addCar, deleteCar, updateCar, setCarForEdit} = carSlice.actions
export default carReducer;