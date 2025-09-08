import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { cartService } from "./cart.service";

export const getCart = createAsyncThunk(
  "cart/get-cart",
  async (_, thunkAPI) => {
    try {
      return await cartService.getCart();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const cartState = {
  cart: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: cartState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.cart = action.payload.data;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error.message || "";
      });
  },
});

export default cartSlice.reducer;
