import {createSlice} from '@reduxjs/toolkit'

const taskSlice = createSlice({
    name: 'taskSlice',
    initialState: {
        tasks: [],
        status: null,
        error: null
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: new Date().getTime(),
                completed: false,
                ...action.payload.todo
            })
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
        },
        toggleTask: (state, action) => {
            const toggledTask = state.tasks.find(task => task.id === action.payload.id)
            toggledTask.completed = !toggledTask.completed
        }
    },
    extraReducers: {}
})

const taskReducer = taskSlice.reducer

export const {addTask, deleteTask, toggleTask} = taskSlice.actions;

export default taskReducer;
