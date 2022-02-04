import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {usersService} from "../services/index"

export const getAllUsers = createAsyncThunk(
    'usersSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await usersService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
)

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        status: null,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.users = action.payload

        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const usersReducer = usersSlice.reducer

export default usersReducer;