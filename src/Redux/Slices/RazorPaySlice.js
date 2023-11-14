import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import axiosInstance from "../../Helper/axiosinstance";

const initialState = {
    key: "key",
    subscription_id: "",
    isPaymentVerified: false,
    allPayments: {},
    finalMonths: {},
    monthlySalesRecord: {},
};

//thunk// function to get the api key
export const getRazorPayId = createAsyncThunk("/razorPayId/get", async () => {
    try {
        const res = await axiosInstance.get("/payments/razorpay-key");
        return res.data;
    } catch (error) {
        toast.error("Failed to load data");
    }
});
//purchase thunk

export const purchaseCourseBundle = createAsyncThunk(
    "/purchaseCourse",
    async () => {
      try {
        const res = await axiosInstance.post("/payments/subscribe");
        return res.data;
      } catch (error) {
        toast.error(error?.response?.data?.message);
      }
    }
  );
export const verifyUserPayment = createAsyncThunk(
    "/verifyPayment",
    async (paymentDetail) => {
        try {
            const res = await axiosInstance.post("/payments/verify", {
                razorpay_payment_id: paymentDetail.razorpay_payment_id,
                razorpay_subscription_id: paymentDetail.razorpay_subscription_id,
                razorpay_signature: paymentDetail.razorpay_signature,
            });
            return res?.data;
        } catch (error) {
            toast.error("error?.response?.data?.message");
        }
    }
);
export const getPaymentRecord = createAsyncThunk(
    "/payments/record=100",
    async () => {
        try {
            const response = await axiosInstance.get("payments?count=100",)
            toast.promise(response, {
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
            toast.promise(response, {
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
            .addCase(getRazorPayId.fulfilled, (state, action) => {
                state.key = action?.payload?.key
            })
            .addCase(purchaseCourseBundle.fulfilled, (state, action) => {
                state.subscription_id = action?.payload?.subscription_id;
            })
            .addCase(verifyUserPayment.fulfilled, (state, action) => {
                toast.success(action?.payload?.message)
                state.isPaymentVerified = action?.payload?.success
            })
            .addCase(verifyUserPayment.rejected, (state, action) => {
                toast.success(action?.payload?.message)
                state.isPaymentVerified = action?.payload?.success
            })
            .addCase(getPaymentRecord.fulfilled, (state, action) => {
                state.allPayments = action?.payload?.allPayments;
                state.finalMonths = action?.payload?.finalMonths;
                state.monthlySalesRecord = action?.payload?.monthlySalesRecord;
            })
    },
});
export default razorpaySlice.reducer;
