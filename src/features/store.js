import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './users/userSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
    },
});