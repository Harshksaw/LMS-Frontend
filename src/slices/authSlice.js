import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  token: localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null,
};


const authSlice = createSlice({ 
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
        state.token = action.payload;
        },
        removeToken: (state) => {
        state.token = null;
        },
    },
    });


    export const { setSignupData, setLoading, setToken } = authSlice.actions;

    export default authSlice.reducer;