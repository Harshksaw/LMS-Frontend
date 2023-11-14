import { configureStore } from "@reduxjs/toolkit";

import authSlice from './Slices/AuthSlice';
import courseSlice from "./Slices/courseSlice";
import RazorPaySlice from "./Slices/RazorPaySlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        course : courseSlice,
        razorpay : RazorPaySlice
    },
    devTools: true
});

export default store;