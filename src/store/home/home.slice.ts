import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import homeService from "./home.service";
import { HomeInterface } from "./homeInterface";
import { getErrorMessage } from "utils";

/**
 * Initial state for the authentication
 */
const initialState: HomeInterface = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    isLoadingMainSlider: false,
    mainSliderData: null,
    message: null,
    isLoadingTopCategory: false,
    topCategoryData: null,
    isLoadingFeatureCategory: false,
    featureCategoryData: null,
    ownDesignerData:null,
    exclusiveCollectionData:null,
    lovedCollectionData: null,
    isLoadingFeatureProduct: false,
    featureProductData: null,
    isLoadingBestSellerProduct: false,
    bestSellerProductData: null,
    isLoadingMenuBar: false,
    headerMenuData:null,
    isLoadingCelebrityProduct: false,
    celebrityProductData :null,
    isLoadingTabProduct: false,
    tabProductData: null,
    blogsData: null,
    isLoadingBlogs: false
}

// Async Thunks

export const getHeaderMenu = createAsyncThunk("get/header/menu", async (_, thunkApi: any) => {
    try {
        const response = await homeService.headerMenuApi();
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const homeMainSlider = createAsyncThunk("get/mainSlider", async (_, thunkApi: any) => {
    try {
        const response = await homeService.mainSlider();
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const homeTopCategory = createAsyncThunk("get/new/drops", async (_, thunkApi: any) => {
    try {
        const response = await homeService.newDropsApi();
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const featureCagtegory = createAsyncThunk("get/feature/category", async (_, thunkApi: any) => {
    try {
        const response = await homeService.featureCagtegoryApi();
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const featureProduct = createAsyncThunk("get/feature/product", async (_, thunkApi: any) => {
    try {
        const response = await homeService.featureProductApi();
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const bestSellerProduct = createAsyncThunk("get/best/seller/product", async (_, thunkApi: any) => {
    try {
        const response = await homeService.bestSellerProductApi();
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const tabProduct = createAsyncThunk("get/tab/product", async (_, thunkApi: any) => {
    try {
        const response = await homeService.tabProductApi();
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const ownDesignerProduct = createAsyncThunk("get/ownDesigner/data",async (_, thunkApi: any) => {
    try {
      const response = await homeService.ownDesignersApi();
      return response;
    } catch (error: any) {
      const message: any = getErrorMessage(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const lovedCollectionProduct = createAsyncThunk("get/lovedCollection/data", async (_, thunkApi: any) => {
    try {
      const response = await homeService.lovedCollectionApi();
      return response;
    } catch (error: any) {
      const message: any = getErrorMessage(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const exclusiveCollectionProduct = createAsyncThunk("get/exclusiveCollection/data", async (_, thunkApi: any) => {
    try {
      const response = await homeService.exclusiveCollectionApi();
      return response;
    } catch (error: any) {
      const message: any = getErrorMessage(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const celebrityStyleProduct = createAsyncThunk("get/celebrity/style/data", async (_, thunkApi: any) => {
  try {
    const response = await homeService.celebrityStyleApi();
    return response;
  } catch (error: any) {
    const message: any = getErrorMessage(error);
    return thunkApi.rejectWithValue(message);
  }
});

export const getBlogs = createAsyncThunk("get/blogs", async (_, thunkApi: any) => {
  try {
    const response = await homeService.getBlogsApi();
    return response;
  } catch (error: any) {
    const message: any = getErrorMessage(error);
    return thunkApi.rejectWithValue(message);
  }
}
);

// Home Reducer
export const homeReducer = createSlice({
    name: "home-view",
    initialState,
    reducers: {
        resetHome: () => initialState
    },
    extraReducers: (builder) => {
        builder
          .addCase(getHeaderMenu.pending, (state: any, _: any) => {
            state.isLoadingMenuBar = true;
            state.isSuccess = false;
          })
          .addCase(getHeaderMenu.fulfilled, (state: any, action: any) => {
            state.isLoadingMenuBar = false;
            state.isSuccess = true;
            state.headerMenuData = action.payload;
          })
          .addCase(getHeaderMenu.rejected, (state: any) => {
            state.isLoadingMenuBar = false;
            state.isSuccess = false;
          })
          .addCase(homeMainSlider.pending, (state: any, _: any) => {
            state.isLoadingMainSlider = true;
            state.isSuccess = false;
          })
          .addCase(homeMainSlider.fulfilled, (state: any, action: any) => {
            state.isLoadingMainSlider = false;
            state.isSuccess = true;
            state.mainSliderData = action.payload;
          })
          .addCase(homeMainSlider.rejected, (state: any) => {
            state.isAuthLoginLoading = false;
            state.isSuccess = false;
          })
          .addCase(homeTopCategory.pending, (state: any, _: any) => {
            state.isLoadingTopCategory = true;
            state.isSuccess = false;
          })
          .addCase(homeTopCategory.fulfilled, (state: any, action: any) => {
            state.isLoadingTopCategory = false;
            state.isSuccess = true;
            state.topCategoryData = action.payload;
          })
          .addCase(homeTopCategory.rejected, (state: any) => {
            state.isLoadingTopCategory = false;
            state.isSuccess = false;
          })
          .addCase(featureCagtegory.pending, (state: any, _: any) => {
            state.isLoadingFeatureCategory = true;
            state.isSuccess = false;
          })
          .addCase(featureCagtegory.fulfilled, (state: any, action: any) => {
            state.isLoadingFeatureCategory = false;
            state.isSuccess = true;
            state.featureCategoryData = action.payload;
          })
          .addCase(featureCagtegory.rejected, (state: any) => {
            state.isLoadingFeatureCategory = false;
            state.isSuccess = false;
          })
          .addCase(featureProduct.pending, (state: any, _: any) => {
            state.isLoadingFeatureProduct = true;
            state.isSuccess = false;
          })
          .addCase(featureProduct.fulfilled, (state: any, action: any) => {
            state.isLoadingFeatureProduct = false;
            state.isSuccess = true;
            state.featureProductData = action.payload;
          })
          .addCase(featureProduct.rejected, (state: any) => {
            state.isLoadingFeatureProduct = false;
            state.isSuccess = false;
          })
          .addCase(bestSellerProduct.pending, (state: any, _: any) => {
            state.isLoadingBestSellerProduct = true;
            state.isSuccess = false;
          })
          .addCase(bestSellerProduct.fulfilled, (state: any, action: any) => {
            state.isLoadingBestSellerProduct = false;
            state.isSuccess = true;
            state.bestSellerProductData = action.payload;
          })
          .addCase(bestSellerProduct.rejected, (state: any) => {
            state.isLoadingBestSellerProduct = false;
            state.isSuccess = false;
          })
          .addCase(ownDesignerProduct.pending, (state: any, _: any) => {
            state.isLoadingBestSellerProduct = true;
            state.isSuccess = false;
          })
          .addCase(ownDesignerProduct.fulfilled, (state: any, action: any) => {
            state.isLoadingBestSellerProduct = false;
            state.isSuccess = true;
            state.ownDesignerData = action.payload;
          })
          .addCase(ownDesignerProduct.rejected, (state: any) => {
            state.isLoadingBestSellerProduct = false;
            state.isSuccess = false;
          })
          .addCase(lovedCollectionProduct.pending, (state: any, _: any) => {
            state.isLoadingBestSellerProduct = true;
            state.isSuccess = false;
          })
          .addCase(lovedCollectionProduct.fulfilled, (state: any, action: any) => {
              state.isLoadingBestSellerProduct = false;
              state.isSuccess = true;
              state.lovedCollectionData = action.payload;
          })
          .addCase(lovedCollectionProduct.rejected, (state: any) => {
            state.isLoadingBestSellerProduct = false;
            state.isSuccess = false;
          })
          .addCase(exclusiveCollectionProduct.pending, (state: any, _: any) => {
            state.isLoadingBestSellerProduct = true;
            state.isSuccess = false;
          })
          .addCase(exclusiveCollectionProduct.fulfilled, (state: any, action: any) => {
              state.isLoadingBestSellerProduct = false;
              state.isSuccess = true;
              state.exclusiveCollectionData = action.payload;
          })
          .addCase(exclusiveCollectionProduct.rejected, (state: any) => {
            state.isLoadingBestSellerProduct = false;
            state.isSuccess = false;
          })
          .addCase(celebrityStyleProduct.pending, (state: any, _: any) => {
            state.isLoadingCelebrityProduct = true;
            state.isSuccess = false;
          })
          .addCase(celebrityStyleProduct.fulfilled, (state: any, action: any) => {
              state.isLoadingCelebrityProduct = false;
              state.isSuccess = true;
              state.celebrityProductData = action.payload;
          })
          .addCase(celebrityStyleProduct.rejected, (state: any) => {
            state.isLoadingCelebrityProduct = false;
            state.isSuccess = false;
          })
          .addCase(tabProduct.pending, (state: any, _: any) => {
            state.isLoadingTabProduct = true;
            state.isSuccess = false;
          })
          .addCase(tabProduct.fulfilled, (state: any, action: any) => {
              state.isLoadingTabProduct = false;
              state.isSuccess = true;
              state.tabProductData = action.payload;
          })
          .addCase(tabProduct.rejected, (state: any) => {
            state.isLoadingTabProduct = false;
            state.isSuccess = false;
          })
          .addCase(getBlogs.pending, (state: any, _: any) => {
            state.isLoadingBlogs = true;
            state.isSuccess = false;
          })
          .addCase(getBlogs.fulfilled, (state: any, action: any) => {
              state.isLoadingBlogs = false;
              state.isSuccess = true;
              state.blogsData = action.payload;
          })
          .addCase(getBlogs.rejected, (state: any) => {
            state.isLoadingBlogs = false;
            state.isSuccess = false;
          });
    }
});

export const { resetHome } = homeReducer.actions;
export default homeReducer.reducer;
