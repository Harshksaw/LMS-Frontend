import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helper/axiosinstance";



const initialState = {
    courseData: []
}

//api to get all courses Asynch chronous courses
export const getAllCourses = createAsyncThunk("/course/get", async () => {


    try {
        const response = axiosInstance.get("/courses")

        toast.promise(response, {
            loading: "Loading course Data",
            success: "Courses Loaded SUccessfully",
            error: "Failed to get courses"
        })
        // response = await response
        // return response.data.courses;
        return (await response).data

    } catch (error) {
        toast.error(error?.responses?.data?.message)
    }
})
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
            success:"Course created successfully",
            error: "Failed to create course"
        })

        return (await response).data
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
})




const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action) => {
            if (action.payload) {

                state.courseData = [...action.payload]
            }
        })


    }
});

export default courseSlice.reducer;