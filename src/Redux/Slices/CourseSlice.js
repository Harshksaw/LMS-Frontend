import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helper/axiosinstance";



const initialState = {
    courseData: []
}

//api to get all courses Asynch chronous courses
export const getAllCourses = createAsyncThunk("/course/delete", async () => {
    try {
        const res = axiosInstance.get("/courses");

        toast.promise(res, {
            loading: "Loading courses data...",
            success: "Courses loaded successfully",
            error: "Failed to get courses",
        });

        const response = await res;

        return response.data.courses;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});
export const deleteCourse = createAsyncThunk("/course/get", async (id) => {
    try {
        const res = axiosInstance.delete(`/courses/${id}`);

        toast.promise(res, {
            loading: "deleting data...",
            success: "Courses deleted successfully",
            error: "Failed to delete courses",
        });

        const response = await res;

        return response.data.courses;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});
export const createNewCourse = createAsyncThunk("/course/create", async (data) => {

    try {
        let formData = new FormData();
        formData.append("title", data?.title)
        formData.append("description", data?.description)
        formData.append("category", data?.category)
        formData.append("createdBy", data?.createdBy)
        formData.append("thumbnail", data?.thumbnail)

        const response = axiosInstance.post("/courses", formData);

        toast.promise(response, {
            loading: "Creating new Course",
            success: "Course created successfully",
            error: "Failed to create course"
        })

        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})




const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            if (action.payload) {
                state.coursesData = [...action.payload];
            }
        });
    },
});






export default courseSlice.reducer;