import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helper/axiosinstance";

const initialState = {
    key: "",
    subscription_id: false,
    isPaymentVerified: false,
    allPayments: {},
    finalMonths: {},
    monthlySalesRecord: {},
};

//thunk
export const getRazorPayId = createAsyncThunk("/razorpay/getId", async () => {
    try {
        const response = await axiosInstance.get("/payments/razorpay-key");
        return response.data;
    } catch (e) {
        toast.error("failed to load Data");
    }
});
//purchase thunk
export const purchaseCourseBundle = createAsyncThunk(
    "/purchaseCourse",
    async () => {
        try {
            const response = await axiosInstance.get("/payments/subscribe");
            return response.data;
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
);
export const verifiyUserPayment = createAsyncThunk(
    "/payments.verify",
    async (data) => {
        try {
            const response = await axiosInstance.post("/payments/verify", {
                razorpay_payments_id: data.razorpay_payments_id,
                razorpay_subscription_id: data.razorpay_subscription_id,
                razorpay_signature: data.razorpay_signature,
            });
            return response.data;
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    }
);

export const getPaymentRecord = createAsyncThunk(
    "/payments/record=100",
    async () => {
        try {
            const response = await axiosInstance.get("payments?count=100",)
                    toast.promise(response , {
                        loading: "Loading your payment records",
                        success: (data) => {
                            return data?.data?.message;
                        },
                        error: "Failed to load payment records",
                    })
            return (await response).data
        } catch (error) { 
            toast.error("Operation Failed")
        }
});
export const cancelCourseBundle = createAsyncThunk(
    "/payments/cancel",
    async () => {
        try {
            const response = await axiosInstance.get("payments/unsubscribe",)
                    toast.promise(response , {
                        loading: "Loading your payment records",
                        success: (data) => {
                            return data?.data?.message;
                        },
                        error: "Failed to load payment records",
                    })
            return (await response).data
        } catch (error) { 
            toast.error(error?.response?.data?.message)
        }
});

const razorpaySlice = createSlice({
    name: "razorpay",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getRazorPayId.fulfilled, (state,action)=>{
            state.key = action?.payload?.key
        })
        .addCase(purchaseCourseBundle.fulfilled, (state, action)=>{
            state.subscription_id = action?.payload?.subscription_id;
        })
        .addCase(verifiyUserPayment.fulfilled, (state, action)=>{
            toast.success(action?.payload?.message)
            state.isPaymentVerified = action?.payload?.success
        })
        .addCase(verifiyUserPayment.rejected, (state, action)=>{
            toast.success(action?.payload?.message)
            state.isPaymentVerified = action?.payload?.success
        })
        .addCase(getPaymentRecord.fulfilled, (state, action)=>{
            state.allPayments = action?.payload?.allPayments;
            state.finalMonths - action?.payload?.finalMonths;
            state.monthlySalesRecord = action?.payload?.monthlySalesRecord
        })
     },
});
export default razorpaySlice.reducer;
