import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";
import { OrderDataInterface } from "./orderInterface";
import { getErrorMessage, getTokenHeader } from "utils";

/**
 * Initial state for the account
 */
const initialState: OrderDataInterface = {
    isError: false,
    isSuccess: false,
    isLoadingOrderAddress: false,
    isLoadingCartList: false,
    cartListData: null,
    isLoadingCartSummary: false,
    cartSummaryData: null,
    isLoadingSaveOrder: false,
    saveOrderData : null
}

// Async Thunks

// Address slice
export const updateOrderAddress = createAsyncThunk("update/order/address", async (userData: any, thunkApi: any) => {
    try {
        const response: any = await orderService.updateOrderAddressApi(userData, getTokenHeader());
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const cartListDataApi = createAsyncThunk("cart/list", async (userData:any,thunkApi: any) => {
    try {
        const response:any = await orderService.cartListApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const cartSummaryDataApi = createAsyncThunk("cart/summary", async (userData:any,thunkApi: any) => {
    try {
        const response:any = await orderService.cartSummaryApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const orderSaveaApi = createAsyncThunk("save/order", async (userData:any,thunkApi: any) => {
    try {
        const response:any = await orderService.saveOrderApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});


// Account Reducer
export const orderDataReducer = createSlice({
    name: "order-section",
    initialState,
    reducers: {
        resetOrder: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(updateOrderAddress.pending, (state: any, _: any) => {
                state.isLoadingOrderAddress = true;
            })
            .addCase(updateOrderAddress.fulfilled, (state: any, action: any) => {
                state.isLoadingOrderAddress = false;
            })
            .addCase(updateOrderAddress.rejected, (state: any) => {
                state.isLoadingOrderAddress = false;
            })
            .addCase(cartListDataApi.pending, (state: any, _: any) => {
                state.isLoadingCartList = true;
                state.cartListData =  null
                state.isSuccess = false;
            })
            .addCase(cartListDataApi.fulfilled, (state: any, action: any) => {
                state.isLoadingCartList = false;
                state.cartListData = action.payload
                state.isSuccess = true;
            })
            .addCase(cartListDataApi.rejected, (state: any) => {
                state.isLoadingCartList = false;
                state.cartListData = null
                state.isSuccess = false;
            })
            .addCase(cartSummaryDataApi.pending, (state: any, _: any) => {
                state.isLoadingCartSummary = true;
                state.cartSummaryData =  null
            })
            .addCase(cartSummaryDataApi.fulfilled, (state: any, action: any) => {
                state.isLoadingCartSummary = false;
                state.cartSummaryData = action.payload
            })
            .addCase(cartSummaryDataApi.rejected, (state: any) => {
                state.isLoadingCartSummary = false;
                state.cartSummaryData = null
            })
            .addCase(orderSaveaApi.pending, (state: any, _: any) => {
                state.isLoadingSaveOrder = true;
                state.saveOrderData =  null
            })
            .addCase(orderSaveaApi.fulfilled, (state: any, action: any) => {
                state.isLoadingSaveOrder = false;
                state.saveOrderData = action.payload
            })
            .addCase(orderSaveaApi.rejected, (state: any) => {
                state.isLoadingSaveOrder = false;
                state.saveOrderData = null
            })
    }

});

export const { resetOrder } = orderDataReducer.actions;
export default orderDataReducer.reducer;
