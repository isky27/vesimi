import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountService from "./accountService";
import { AccountDataInterface } from "./accountDataInterface";
import { getErrorMessage, getTokenHeader } from "../../utils";

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
    isLoadingDeleteAddress:false,
    singleAddressDetails: null
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

export const getSingleAddress = createAsyncThunk("get/single/address", async (userData: any, thunkApi: any) => {
    try {
        const response: any = await accountService.getSingleAddressApi(userData, getTokenHeader());
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const deleteAddress = createAsyncThunk("delete/address", async (userData: any, thunkApi: any) => {
    try {
        const response: any = await accountService.deleteAddressApi(userData, getTokenHeader());
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const editAddress = createAsyncThunk("update/address", async (userData: any, thunkApi: any) => {
    try {
        const response: any = await accountService.updateAddressApi(userData, getTokenHeader());
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
                state.isLoadingUserAddress= true
                state.countriesData = null;
            })
            .addCase(getCountries.fulfilled, (state: any, action: any) => {
                state.isLoadingUserAddress = false;
                state.countriesData = action.payload;
            })
            .addCase(getCountries.rejected, (state: any) => {
                state.isLoadingUserAddress = false;
                state.countriesData = null;
            })
            .addCase(getStates.pending, (state: any, _: any) => {
                state.statesData = null;
                state.isLoadingUserAddress = true;
            })
            .addCase(getStates.fulfilled, (state: any, action: any) => {
                state.statesData = action.payload;
                state.isLoadingUserAddress = false;
            })
            .addCase(getStates.rejected, (state: any) => {
                state.statesData = null;
                state.isLoadingUserAddress = false;
            })
            .addCase(getCities.pending, (state: any, _: any) => {
                state.citiesData = null;
                state.isLoadingUserAddress = true;
            })
            .addCase(getCities.fulfilled, (state: any, action: any) => {
                state.citiesData = action.payload
                state.isLoadingUserAddress = false;
            })
            .addCase(getCities.rejected, (state: any) => {
                state.citiesData = null;
                state.isLoadingUserAddress = false;
            })
            .addCase(addAddress.pending, (state: any, _: any) => {
                state.isLoadingUserAddress = true;
            })
            .addCase(addAddress.fulfilled, (state: any, action: any) => {
                state.isLoadingUserAddress = false;
            })
            .addCase(addAddress.rejected, (state: any) => {
                state.isLoadingUserAddress = false;
            })
            .addCase(deleteAddress.pending, (state:any)=>{
                state.isLoadingDeleteAddress = true
            })
            .addCase(deleteAddress.fulfilled, (state:any)=>{
                state.isLoadingDeleteAddress = false
            })
            .addCase(deleteAddress.rejected, (state:any)=>{
                state.isLoadingDeleteAddress = false
            })
            .addCase(getSingleAddress.pending, (state:any)=>{
                state.singleAddressDetails = null;
                state.isLoadingUserAddress = true
            })
            .addCase(getSingleAddress.fulfilled, (state:any, action:any)=>{
                state.isLoadingUserAddress = false;
                state.singleAddressDetails=action.payload
            })
            .addCase(getSingleAddress.rejected, (state:any)=>{
                state.isLoadingUserAddress = false;
                state.singleAddressDetails=null
            })
            .addCase(editAddress.pending, (state:any)=>{
                state.isLoadingDeleteAddress = true
            })
            .addCase(editAddress.fulfilled, (state:any)=>{
                state.isLoadingDeleteAddress = false
            })
            .addCase(editAddress.rejected, (state:any)=>{
                state.isLoadingDeleteAddress = false
            })
    }

});

export const { resetAccount } = accountDataReducer.actions;
export default accountDataReducer.reducer;
