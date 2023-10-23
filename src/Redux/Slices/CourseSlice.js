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
        // response = await response
        // return response.data.courses;
        return (await response).data
        
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
        builder.addCase(getAllCourses.fulfilled,(state, action)=>{
            if(action.payload){
                console.log("Course" ,action.payload)
                state.courseData = [...action.payload];
            }
        })


    }
});

export default courseSlice.reducer;