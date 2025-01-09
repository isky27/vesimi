import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { AuthDataInterface } from "./authDataInterface";
import { getErrorMessage } from "utils";
import { toast } from "react-toastify";

/**
 * Initial state for the authentication
 */
const initialState: AuthDataInterface = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  isAuthLoginLoading: false,
  message: null,
  loginDetails: null,
  selectedCurrency: "INR",
  isOpenLoginPopup: false,
  isOpenSignupPopup: false,
  isLoadingNewsSubscribe: false,
};

// Async Thunks

// Login slice
export const loginPost = createAsyncThunk(
  "post/login",
  async (userData: any, thunkApi: any) => {
    try {
      const response: any = await authService.authLoginPost(userData?.payload);
      if (response?.result) {
        userData?.closePopup(false);
        localStorage.setItem("loginDetails", JSON.stringify(response));
        toast.success("User is successfully logged in");
      } else {
        toast.error(response.message[0]);
        throw new Error(response);
      }
      return response;
    } catch (error: any) {
      const message: any = getErrorMessage(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const signUpPost = createAsyncThunk(
  "post/signup",
  async (userData: any, thunkApi: any) => {
    try {
      const response: any = await authService.authSignUpPost(userData?.payload);
      if (response?.result) {
        userData?.closePopup(false);
        localStorage.setItem("loginDetails", JSON.stringify(response));
        toast.success("User is successfully registered");
      } else {
        toast.error(response.message[0]);
        throw new Error(response);
      }
      return response;
    } catch (error: any) {
      const message: any = getErrorMessage(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const resetPassSendCodePost = createAsyncThunk(
  "post/reset/password/code",
  async (userData: any, thunkApi: any) => {
    try {
      const response: any = await authService.resetPassSendCodeApi(
        userData?.payload
      );
      if (response?.result === true) {
        userData?.closePopup(false);
        userData?.openPopup(true);
        toast.success(response?.message)
      } else {
        toast.error(response.message[0]);
        throw new Error(response);
      }
      return response;
    } catch (error: any) {
      const message: any = getErrorMessage(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const confirmPassSendPost = createAsyncThunk(
  "post/reset/confirm/password",
  async (userData: any, thunkApi: any) => {
    try {
      const response: any = await authService.confirmPassCodeApi(userData);
      return response;
    } catch (error: any) {
      const message: any = getErrorMessage(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const newsLetterSubscribe = createAsyncThunk(
  "post/subscribe/news/letter",
  async (userData: any, thunkApi: any) => {
    try {
      const response: any = await authService.newsLetterSubsApi(userData);
      if (response?.result == true){
        toast.success(response?.message)
      } return response;
    } catch (error: any) {
      const message: any = getErrorMessage(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

// Logout slice
export const logoutPost = createAsyncThunk(
  "post/logout",
  async (_, thunkApi) => {
    try {
      thunkApi.dispatch(resetAuth());
      return localStorage.clear();
    } catch (error: any) {
      const message: any = getErrorMessage(error);
      return thunkApi.rejectWithValue(message);
    }
  }
);

//Currency chnage reducer
export const currencyChange = createAsyncThunk(
  "change/currency",
  async (data: any) => {
    return data;
  }
);

export const setOpenLoginPopup = createAsyncThunk(
  "open/login/popup",
  async (data: any) => {
    return data;
  }
);

export const setOpenSignPopup = createAsyncThunk(
  "open/signup/popup",
  async (data: any) => {
    return data;
  }
);

// Authentication Reducer
export const authDataReducer = createSlice({
  name: "auth-login",
  initialState,
  reducers: {
    resetAuth: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginPost.pending, (state: any, _: any) => {
        state.isAuthLoginLoading = true;
        state.isSuccess = false;
      })
      .addCase(loginPost.fulfilled, (state: any, action: any) => {
        state.isAuthLoginLoading = false;
        state.isSuccess = true;
        state.isOtp = action?.payload?.data?.otp || false;
        state.loginDetails = action.payload;
      })
      .addCase(loginPost.rejected, (state: any) => {
        state.isAuthLoginLoading = false;
        state.isSuccess = false;
      })
      .addCase(signUpPost.pending, (state: any, _: any) => {
        state.isAuthLoginLoading = true;
        state.isSuccess = false;
      })
      .addCase(signUpPost.fulfilled, (state: any, action: any) => {
        state.isAuthLoginLoading = false;
        state.isSuccess = true;
        state.isOtp = action?.payload?.data?.otp || false;
        state.loginDetails = action.payload;
      })
      .addCase(signUpPost.rejected, (state: any) => {
        state.isAuthLoginLoading = false;
        state.isSuccess = false;
      })
      .addCase(logoutPost.fulfilled, (state: any) => {
        state.loginDetails = null;
      })
      .addCase(currencyChange.fulfilled, (state: any, action) => {
        state.selectedCurrency = action.payload;
      })
      .addCase(setOpenLoginPopup.fulfilled, (state: any, action) => {
        state.isOpenLoginPopup = action.payload;
      })
      .addCase(setOpenSignPopup.fulfilled, (state: any, action) => {
        state.isOpenSignupPopup = action.payload;
      })
      .addCase(resetPassSendCodePost.pending, (state: any, _: any) => {
        state.isAuthLoginLoading = true;
        state.isSuccess = false;
      })
      .addCase(resetPassSendCodePost.fulfilled, (state: any, action: any) => {
        state.isAuthLoginLoading = false;
      })
      .addCase(resetPassSendCodePost.rejected, (state: any) => {
        state.isAuthLoginLoading = false;
      })
      .addCase(confirmPassSendPost.pending, (state: any, _: any) => {
        state.isAuthLoginLoading = true;
      })
      .addCase(confirmPassSendPost.fulfilled, (state: any, action: any) => {
        state.isAuthLoginLoading = false;
      })
      .addCase(confirmPassSendPost.rejected, (state: any) => {
        state.isAuthLoginLoading = false;
      })
      .addCase(newsLetterSubscribe.pending, (state: any, _: any) => {
        state.isLoadingNewsSubscribe = true;
      })
      .addCase(newsLetterSubscribe.fulfilled, (state: any, action: any) => {
        state.isLoadingNewsSubscribe = false;
      })
      .addCase(newsLetterSubscribe.rejected, (state: any) => {
        state.isLoadingNewsSubscribe = false;
      });
  },
});

export const { resetAuth } = authDataReducer.actions;
export default authDataReducer.reducer;
