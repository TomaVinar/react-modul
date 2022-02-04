import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../services";


export const getAllposts = createAsyncThunk(
    'postsSlice/getAllPosts',
    async (_, {rejectWithValue}) => {
        try {
            return await postsService.getAll();
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
)

const postsSlice = createSlice({
    name: 'postsSlice',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [getAllposts.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllposts.fulfilled]: (state, action)=> {
            state.status = 'fullfilled'
            state.posts = action.payload
        },
        [getAllposts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }
    }
})

const postsReducer = postsSlice.reducer

export default postsReducer;