import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountService from "./accountService";
import { AccountDataInterface } from "./accountDataInterface";
import { getErrorMessage, getTokenHeader } from "utils";

/**
 * Initial state for the account
 */
const initialState: AccountDataInterface = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    isLoadingUserAddress: false,
    userAddressData: null,
    countriesData: null,
    statesData: null,
    citiesData: null,
}

// Async Thunks

// Address slice
export const getUserAddress = createAsyncThunk("get/user/address", async (userData: any, thunkApi: any) => {
    try {
        const response: any = await accountService.getAddressApi(userData, getTokenHeader());
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const getCountries = createAsyncThunk("get/country", async (_ , thunkApi: any) => {
    try {
        const response: any = await accountService.getCountriesApi( getTokenHeader());
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const getStates = createAsyncThunk("get/state", async (countryId:number , thunkApi: any) => {
    try {
        const response: any = await accountService.getStatesApi(countryId, getTokenHeader());
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const getCities = createAsyncThunk("get/cities", async (stateId: number, thunkApi: any) => {
    try {
        const response: any = await accountService.getCitiesApi(stateId, getTokenHeader());
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const addAddress = createAsyncThunk("add/address", async (userData: any, thunkApi: any) => {
    try {
        const response: any = await accountService.addAddressApi(userData, getTokenHeader());
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

// Account Reducer
export const accountDataReducer = createSlice({
    name: "account-section",
    initialState,
    reducers: {
        resetAccount: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserAddress.pending, (state: any, _: any) => {
                state.isLoadingUserAddress = true;
                state.userAddressData = null;
            })
            .addCase(getUserAddress.fulfilled, (state: any, action: any) => {
                state.isLoadingUserAddress = false;
                state.userAddressData = action.payload;
            })
            .addCase(getUserAddress.rejected, (state: any) => {
                state.isLoadingUserAddress = false;
                state.userAddressData = null;
            })
            .addCase(getCountries.pending, (state: any, _: any) => {
                state.countriesData = null;
            })
            .addCase(getCountries.fulfilled, (state: any, action: any) => {
                state.countriesData = action.payload;
            })
            .addCase(getCountries.rejected, (state: any) => {
                state.countriesData = null;
            })
            .addCase(getStates.pending, (state: any, _: any) => {
                state.statesData = null;
            })
            .addCase(getStates.fulfilled, (state: any, action: any) => {
                state.statesData = action.payload;
            })
            .addCase(getStates.rejected, (state: any) => {
                state.statesData = null;
            })
            .addCase(getCities.pending, (state: any, _: any) => {
                state.citiesData = null;
            })
            .addCase(getCities.fulfilled, (state: any, action: any) => {
                state.citiesData = action.payload;
            })
            .addCase(getCities.rejected, (state: any) => {
                state.citiesData = null;
            })
            .addCase(addAddress.pending, (state: any, _: any) => {
                state.citiesData = null;
            })
            .addCase(addAddress.fulfilled, (state: any, action: any) => {
                state.citiesData = action.payload;
            })
            .addCase(addAddress.rejected, (state: any) => {
                state.citiesData = null;
            })
    }

});

export const { resetAccount } = accountDataReducer.actions;
export default accountDataReducer.reducer;
