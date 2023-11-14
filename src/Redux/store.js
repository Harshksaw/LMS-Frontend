import { configureStore } from "@reduxjs/toolkit";

import authSlice from './Slices/AuthSlice';
import CourseSliceReducer from "./Slices/CourseSlice";
import razorpaySliceReducer from "./Slices/RazorPaySlice";
const store = configureStore({
    reducer: {
        auth: authSlice,
        course : CourseSliceReducer,
        razorpay: razorpaySliceReducer
    },
    devTools: true
});

export default store;