import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getErrorMessage } from "utils";
import { CategoryInterface } from "./categoryInterface";
import categoryService from "./category.service";

/**
 * Initial state for the authentication
 */
const initialState: CategoryInterface = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: null,
    isLoadingSubCategories: false,
    subCategoryData :null,
    categoryProductData:null,
    isLoadingCategoryProduct:false
}

// Async Thunks

export const getSubCategories = createAsyncThunk("get/sub/categories", async (userData:any,thunkApi: any) => {
    try {
        const response = await categoryService.subcategoryApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const getCategoryProducts = createAsyncThunk("get/category/product", async (userData:any,thunkApi: any) => {
    try {
        const response = await categoryService.categoryProductApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

// Home Reducer
export const categoryReducer = createSlice({
    name: "category-view",
    initialState,
    reducers: {
        resetHome: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSubCategories.pending, (state: any, _: any) => {
                state.isLoadingSubCategories = true;
                state.isSuccess = false;
            })
            .addCase(getSubCategories.fulfilled, (state: any, action: any) => {
                state.isLoadingSubCategories = false;
                state.isSuccess = true;
                state.subCategoryData = action.payload;
            })
            .addCase(getSubCategories.rejected, (state: any) => {
                state.isLoadingSubCategories = false;
                state.isSuccess = false;
            })
            .addCase(getCategoryProducts.pending, (state: any, _: any) => {
                state.isLoadingCategoryProduct = true;
                state.isSuccess = false;
            })
            .addCase(getCategoryProducts.fulfilled, (state: any, action: any) => {
                state.isLoadingCategoryProduct = false;
                state.isSuccess = true;
                state.categoryProductData = action.payload;
            })
            .addCase(getCategoryProducts.rejected, (state: any) => {
                state.isLoadingCategoryProduct = false;
                state.isSuccess = false;
            })
    }

});

export const { resetHome } = categoryReducer.actions;
export default categoryReducer.reducer;