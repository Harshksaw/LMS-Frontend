import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast"

import axiosInstance from "../../Helper/axiosinstance"

const initialState = {
    allUsersCount :0,
    subscribedUsersCount  :0
}



export const getStatsData = createAsyncThunk("stats/get", async()=>{

    try {
        const response = axiosInstance.get("admin/stats/users");
        toast.promise(response, {
            loading: "Getting the stats",
            success: (data)=>{
                return data?.data?.message
            },
            error: "Something went wrong",
          });
        return (await response).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message || error.message)
        
    }
})










const statSlice = createSlice({
    name:"stat",
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(getStatsData.fulfilled, (state , action)=>{
            state.allUserCount = action?.payload?.allUserCount;
            state.subscribedUsersCount = action?.payload?.subscribeUsersCount;
        })

    }
})

export default statSlice.reducer