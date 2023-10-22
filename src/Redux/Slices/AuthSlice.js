import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

import axiosInstance from "../../Config/axiosinstance";

const initialState = {
    isLoggedIn: localStorage.getItem("isLoggedIn") || false,
    role: localStorage.getItem("role") || "",
    data: localStorage.getItem("data") || {},
};

//thunk -> a logic that will perform work later

// function to handle signup
export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
    try {
        let res = axiosInstance.post("user/register", data);
        // function to display notifications during the asynchronous process:
        toast.promise(res, {
            loading: "Wait! Creating your account",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to create account",
        });

        // getting response resolved here
        res = await res;
        return res.data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
});

//action ->
export const login = createAsyncThunk("/auth/login", async(data)=>{
    try {
        let res = axiosInstance.post("user/login", data);
        // function to display notifications during the asynchronous process:
        toast.promise(res, {
            loading: "Wait! Authentication in Progress",
            success: (data) => {
                return data?.data?.message;
            },
            error: "Failed to Login account",
        });

        // getting response resolved here
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }


})
export const logout = createAsyncThunk( 'auth/logout', async()=>{
    try{


        //api call
        const res = axiosInstance('user/logout');
        toast.promise(res, {
            loading:"Logging You out",
            success:(data) => {
                return data?.data?.message;
            },
            error:"Failed to logout"
        })
        return (await res).data

    }catch(error){
        toast.error(error?.response?.data?.message);
    }
});

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers:(builder)=>{
        // action -> defined outised the Slice now to consider those  we need to use 
        builder.addCase(login.fulfilled, (state , action)=>{
            localStorage.setItem('data', JSON.stringify(action?.payload?.user))
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('role', action?.payload?.user?.role);
            state.isLoggedIn = true;
            state.role = action?.payload?.user?.role
        })
        .addCase(logout.fulfilled , (state)=>{
            localStorage.clear();
            state.data= {};

            state.isLoggedIn = false;
            state.role = "";

        })
    }
});


export default authSlice.reducer;
