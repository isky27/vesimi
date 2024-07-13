import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { AuthDataInterface } from "./authDataInterface";
import { getErrorMessage } from "utils";

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
}

// Async Thunks

// Login slice
export const loginPost = createAsyncThunk("post/login", async (userData: any, thunkApi: any) => {
    try {
        const response = await authService.authLoginPost(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

// Logout slice
export const logoutPost = createAsyncThunk("post/logout", async (_, thunkApi) => {
    try {
        thunkApi.dispatch(resetAuth())
        return localStorage.clear();
    } catch (error: any) {
        const message: any = getErrorMessage(error);
        return thunkApi.rejectWithValue(message);
    }
});

// Authentication Reducer
export const authDataReducer = createSlice({
    name: "auth-login",
    initialState,
    reducers: {
        resetAuth: () => initialState
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
            .addCase(logoutPost.fulfilled,(state: any) => {
                state.loginDetails = null;
            })
    }

});

export const { resetAuth } = authDataReducer.actions;
export default authDataReducer.reducer;
