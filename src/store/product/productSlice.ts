import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "utils";
import { ProductInterface } from "./productInterface";
import productService from "./productService";

/**
 * Initial state for the authentication
 */
const initialState: ProductInterface = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: null,
    isLoadingProductDetail: false,
    productDetailData :null,
    isLoadingRelatedProducts: false,
    relatedProductsData : null
}

// Async Thunks

export const getProductDetails = createAsyncThunk("get/product/details", async (userData:any,thunkApi: any) => {
    try {
        const response = await productService.productDetailApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const getRealtedProducts = createAsyncThunk("get/product/related", async (userData:any,thunkApi: any) => {
    try {
        const response = await productService.relatedProductApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

// Home Reducer
export const productReducer = createSlice({
    name: "product-details",
    initialState,
    reducers: {
        resetProduct: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductDetails.pending, (state: any, _: any) => {
                state.isLoadingProductDetail = true;
                state.isSuccess = false;
            })
            .addCase(getProductDetails.fulfilled, (state: any, action: any) => {
                state.isLoadingProductDetail = false;
                state.isSuccess = true;
                state.productDetailData = action.payload;
            })
            .addCase(getProductDetails.rejected, (state: any) => {
                state.isLoadingProductDetail = false;
                state.isSuccess = false;
            })
            .addCase(getRealtedProducts.pending, (state: any, _: any) => {
                state.isLoadingRelatedProducts = true;
                state.isSuccess = false;
            })
            .addCase(getRealtedProducts.fulfilled, (state: any, action: any) => {
                state.isLoadingRelatedProducts = false;
                state.isSuccess = true;
                state.relatedProductsData = action.payload;
            })
            .addCase(getRealtedProducts.rejected, (state: any) => {
                state.isLoadingRelatedProducts = false;
                state.isSuccess = false;
            })
    }

});

export const { resetProduct } = productReducer.actions;
export default productReducer.reducer;
