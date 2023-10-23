import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Config/axiosinstance";



const initialState = {
    courseData : []
}

//api to get all courses Asynch chronous courses
export const getAllCourses = createAsyncThunk("/course/get", async()=>{


    try{
        const response = axiosInstance.get("/courses")

        toast.promise(response , {
            loading :"Loading course Data",
            success: "Courses Loaded SUccessfully",
            error: "Failed to get courses"
        })
        response = await response
        return response.data.courses;

        
    }catch(error){
        toast.error(error?.responses?.data?.message)
    }
})

const courseSlice = createSlice({
    name:"courses",
    initialState,
    reducers: {

    },
    extraReducers : (builder)=>{

    }
});

export default courseSlice.reducer;