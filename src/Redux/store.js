import { configureStore } from "@reduxjs/toolkit";

import authSlice from './Slices/AuthSlice';
import courseSlice from "./Slices/courseSlice";
import lectureSliceReducer from './Slices/LectureSlice';
import RazorPaySlice from "./Slices/RazorPaySlice";

const store = configureStore({
    reducer: {
        auth: authSlice,
        course : courseSlice,
        razorpay : RazorPaySlice,
        lecture: lectureSliceReducer
    },
    devTools: true
});

export default store;