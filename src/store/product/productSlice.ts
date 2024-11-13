import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "utils";
import { ProductInterface } from "./productInterface";
import productService from "./productService";
import { toast } from "react-toastify";

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
    relatedProductsData : null,
    isLoadingAddToCart: false,
    isLoadingCartList: false,
    cartListData: null,
    isLoadingCartSummary: false,
    cartSummaryData: null
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

export const addToCart = createAsyncThunk("add/to/cart", async (userData:any,thunkApi: any) => {
    try {
        const response:any = await productService.addToCartApi(userData);
        if(response?.result){
            toast.success(response.message)
        }else{
            toast.error(response.message)
        }
        thunkApi.dispatch(cartListDataApi({
            user_id:userData?.user_id
        }))
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const cartListDataApi = createAsyncThunk("cart/list", async (userData:any,thunkApi: any) => {
    try {
        const response:any = await productService.cartListApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const cartSummaryDataApi = createAsyncThunk("cart/summary", async (userData:any,thunkApi: any) => {
    try {
        const response:any = await productService.cartSummaryApi(userData);
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
                state.productDetailData = null;
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
                state.relatedProductsData=null;
            })
            .addCase(getRealtedProducts.fulfilled, (state: any, action: any) => {
                state.isLoadingRelatedProducts = false;
                state.isSuccess = true;
                state.relatedProductsData = action.payload;
            })
            .addCase(getRealtedProducts.rejected, (state: any) => {
                state.isLoadingRelatedProducts = false;
                state.isSuccess = false;
                state.relatedProductsData = null;
            })
            .addCase(addToCart.pending, (state: any, _: any) => {
                state.isLoadingAddToCart = true;
                state.isSuccess = false;
            })
            .addCase(addToCart.fulfilled, (state: any, action: any) => {
                state.isLoadingAddToCart = false;
                state.isSuccess = true;
            })
            .addCase(addToCart.rejected, (state: any) => {
                state.isLoadingAddToCart = false;
                state.isSuccess = false;
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
    }

});

export const { resetProduct } = productReducer.actions;
export default productReducer.reducer;
