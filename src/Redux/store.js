import { configureStore } from "@reduxjs/toolkit";

import authReducer from './Slices/AuthSlice';
import CourseSliceReducer from "./Slices/CourseSlice";
const store = configureStore({
    reducer: {
        auth: authReducer,
        course : CourseSliceReducer
    },
    devTools: true
});

export default store;