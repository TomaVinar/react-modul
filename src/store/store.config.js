import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./car.slice";
import usersReducer from "./users.slice";
import commentsReducer from "./comments.slice";
import postsReducer from "./posts.slice";


const store = configureStore({
    reducer: {
        carReducer,
        usersReducer,
        commentsReducer,
        postsReducer
    }
})

export default store;