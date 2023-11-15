import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helper/axiosinstance";
import toast from "react-hot-toast";


const initialState = {
    lectures :[]
}
//Thunks
export const  getCourseLectures = createAsyncThunk("/course/lecture/get",async(cid)=>{

    try {
        const response = axiosInstance.get(`/courses/${cid}`)
        toast.promise(response, {
            loading: "Fetching course lectures",
            success: "LEctures fetched",
            error: "Failed to load the lectures "
        })
        return (await response).data;

        
    } catch (error) {

        toast.error(error?.responses?.data?.message);
    }
    
});
//Thunks
export const  addCourseLectures = createAsyncThunk("/course/lecture/add",async(data)=>{

    try {

        const formData = new FormData();
        formData.append("lecture", data.lecture)
        formData.append("title", data.title)

        formData.append("description", data.description)

        const response = axiosInstance.post(`/courses/${data.id}`,formData )
        toast.promise(response, {
            loading: "adding course lectures",
            success: "Lecture added successfully",
            error: "Failed to add the lectures "
        })
        return (await response).data;

        
    } catch (error) {

        toast.error(error?.responses?.data?.message);
    }
    
});
//Thunks
export const  deleteCourseLectures = createAsyncThunk("/course/lecture/get",async(data)=>{

    try {
        const response = axiosInstance.delete(`/courses?courseId=${data.courseId}&lectureId=${data.lectureId}`, )
        toast.promise(response, {
            loading: "deleting course lectures",
            success: "delete lecture",
            error: "Failed to delete the lectures "
        })
        return (await response).data;

        
    } catch (error) {

        toast.error(error?.responses?.data?.message);
    }
    
});





const lectureSlice = createSlice({
    name: "lectures",
    initialState: {},
    reducers: {},
    extraReducers: (builder)=>{
        builder.addCase(getCourseLectures.fulfilled = (state, action) => {
            console.log(action)
            state.lectures = action?.payload?.lectures;
        })
        builder.addCase(addCourseLectures.fulfilled = (state, action) => {
            console.log(action)
            state.lectures = action?.payload?.course?.lectures;
        })
        builder.addCase(deleteCourseLectures.fulfilled = (state, action) => {
            console.log(action)
            state.lectures = action.payload?.course?.lectures;
        })

    }
})

export default lectureSlice.reducer