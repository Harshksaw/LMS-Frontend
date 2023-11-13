import { configureStore } from "@reduxjs/toolkit";

import authReducer from './Slices/AuthSlice';
import CourseSliceReducer from "./Slices/CourseSlice";
import razorpaySliceReducer from "./Slices/RazorPaySlice";
const store = configureStore({
    reducer: {
        auth: authReducer,
        course : CourseSliceReducer,
        razorpay: razorpaySliceReducer,
    },
    devTools: true
});

export default store;