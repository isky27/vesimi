import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CategoryInterface } from "./categoryInterface";
import categoryService from "./category.service";
import { getErrorMessage, isCancelRequest } from "../../utils";
import { assetURL } from "utils/InterceptorApi";
import axios from "axios";

/**
 * Initial state for the authentication
 */
const initialState: CategoryInterface = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: null,
  isLoadingSubCategories: false,
  subCategoryData: null,
  categoryProductData: null,
  isLoadingCategoryProduct: false,
  isLoadingSearchProduct: false,
  searchProductData: null,
  isLoadingDesignerList: false,
  designerListData: null
};

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

export const getSearchProducts = createAsyncThunk("get/search/product", async (userData:any,thunkApi: any) => {
    try {
        const response = await categoryService.searchProductApi(userData);
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

export const getDesignersList = createAsyncThunk("get/designer/list", async (_,thunkApi: any) => {
    try {
        const response = await axios.get(assetURL+"designerOptionNew.json");
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
          .addCase(getSearchProducts.pending, (state: any, _: any) => {
            state.isLoadingSearchProduct = true;
            state.isSuccess = false;
            state.searchProductData = null;
          })
          .addCase(getSearchProducts.fulfilled, (state: any, action: any) => {
            state.isLoadingSearchProduct = false;
            state.isSuccess = true;
            state.searchProductData = action.payload;
          })
          .addCase(getSearchProducts.rejected, (state: any, action: any) => {
            state.isLoadingSearchProduct = isCancelRequest(action?.payload);
            state.isSuccess = false;
            state.searchProductData = null;
          })
          .addCase(getCategoryProducts.pending, (state: any, _: any) => {
            state.isLoadingCategoryProduct = true;
            state.isSuccess = false;
            state.categoryProductData = null;
          })
          .addCase(getCategoryProducts.fulfilled, (state: any, action: any) => {
            state.isLoadingCategoryProduct = false;
            state.isSuccess = true;
            state.categoryProductData = action.payload;
          })
          .addCase(getCategoryProducts.rejected, (state: any, action: any) => {
            state.isLoadingCategoryProduct = isCancelRequest(action?.payload);
            state.isSuccess = false;
            state.categoryProductData = null;
          })
          .addCase(getDesignersList.pending, (state: any, _: any) => {
            state.isLoadingDesignerList = true;
            state.isSuccess = false;
            state.designerListData = null;
          })
          .addCase(getDesignersList.fulfilled, (state: any, action: any) => {
            state.isLoadingDesignerList = false;
            state.isSuccess = true;
            state.designerListData = action.payload;
          })
          .addCase(getDesignersList.rejected, (state: any, action: any) => {
            state.isLoadingDesignerList = isCancelRequest(action?.payload);
            state.isSuccess = false;
            state.designerListData = null;
          });
    }

});

export const { resetHome } = categoryReducer.actions;
export default categoryReducer.reducer;
