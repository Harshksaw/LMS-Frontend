import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./Slices/AuthSlice";
import courseSlice from "./Slices/CourseSlice";
import lectureSliceReducer from "./Slices/LectureSlice";
import RazorPaySlice from "./Slices/RazorPaySlice";
import statSliceReducer from "./Slices/StatSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    course: courseSlice,
    razorpay: RazorPaySlice,
    lecture: lectureSliceReducer,
    stat: statSliceReducer,
  },
  devTools: true,
});

export default store;
