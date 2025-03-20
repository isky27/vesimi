import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";
import { OrderDataInterface } from "./orderInterface";
import { getErrorMessage, getTokenHeader } from "utils";
import { toast } from "react-toastify";

/**
 * Initial state for the account
 */
const initialState: OrderDataInterface = {
    isError: false,
    isSuccess: false,
    isLoadingOrderAddress: false,
    isLoadingCartList: false,
    cartListData: null,
    isLoadingCartSummary: false,
    cartSummaryData: null,
    isLoadingSaveOrder: false,
    saveOrderData : null,
    isLoadingUpdateCart: false,
    updateCartData: null,
    isLoadingDeleteCartProduct: false,
    isLoadingOrderHistory: false,
    orderHistoryData: null,
    isLoadingOrderDetails: false,
    orderDetailsData: null,
    isLoadingShippingCost: false,
    shippingPriceData: null,
    isLoadingOrderItems: false,
    orderItemeData: null,
    isLoadingOrderWithRazorpay: false,
    orderWithRazorpayData: null,
}

// Async Thunks

// Address slice
export const updateOrderAddress = createAsyncThunk("update/order/address", async (userData: any, thunkApi: any) => {
    try {
        const response: any = await orderService.updateOrderAddressApi(
          userData?.addressPayload,
          getTokenHeader()
        );
        await thunkApi.dispatch(addShippindCostApi(userData?.shippingPayload))
        await thunkApi.dispatch(cartSummaryDataApi(userData?.shippingPayload));
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const cartListDataApi = createAsyncThunk("cart/list", async (userData:any,thunkApi: any) => {
    try {
        const response:any = await orderService.cartListApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const cartSummaryDataApi = createAsyncThunk("cart/summary", async (userData:any,thunkApi: any) => {
    try {
        const response:any = await orderService.cartSummaryApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const orderSaveaApi = createAsyncThunk("save/order", async (userData:any,thunkApi: any) => {
    try {
        const response:any = await orderService.saveOrderApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const updateCartApi = createAsyncThunk("update/cart", async (userData:any,thunkApi: any) => {
    try {
        const response:any = await orderService.updateCart(userData, getTokenHeader());
        console.log(response, "sfjhhdjfksmhs")
        if (!response?.result){
          toast.error(response?.message)
        } 
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const deleteCartProductApi = createAsyncThunk("delete/cart/product", async (userData:any,thunkApi: any) => {
    try {
        const response:any = await orderService.deleteCartProduct(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const addShippindCostApi = createAsyncThunk("add/shipping/cost", async (userData:any,thunkApi: any) => {
    try {
        const response: any = await orderService.addShippingPrice(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const getOrderHistory = createAsyncThunk("get/order/history", async (userData:any,thunkApi: any) => {
    try {
        const response: any = await orderService.orderHistoryApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const getOrderDetails = createAsyncThunk("get/order/details", async (userData:any,thunkApi: any) => {
    try {
        const response: any = await orderService.orderDetailsApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const getOrderItems = createAsyncThunk("get/order/Items", async (userData:any,thunkApi: any) => {
    try {
        const response: any = await orderService.orderHistoryItemsApi(userData);
        return response;
    } catch (error: any) {
        const message: any = getErrorMessage(error)
        return thunkApi.rejectWithValue(message);
    }
});

export const paymentWithRazorPayApi = createAsyncThunk("payment/razorpay", async (userData:any,thunkApi: any) => {
  try {
      const response: any = await orderService.paymentWithRazorPay(userData);
      return response;
  } catch (error: any) {
      const message: any = getErrorMessage(error)
      return thunkApi.rejectWithValue(message);
  }
});

export const paymentConfirmationRazorPayApi = createAsyncThunk("payment/confirm/razorpay", async (userData:any,thunkApi: any) => {
  try {
      const response: any = await orderService.razorPayConfirm(userData);
      return response;
  } catch (error: any) {
      const message: any = getErrorMessage(error)
      return thunkApi.rejectWithValue(message);
  }
});


// Account Reducer
export const orderDataReducer = createSlice({
    name: "order-section",
    initialState,
    reducers: {
        resetOrder: () => initialState,
        resetOrderSuccess: (state) => {
            state.orderWithRazorpayData = null;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(updateOrderAddress.pending, (state: any, _: any) => {
            state.isLoadingOrderAddress = true;
          })
          .addCase(updateOrderAddress.fulfilled, (state: any, action: any) => {
            state.isLoadingOrderAddress = false;
          })
          .addCase(updateOrderAddress.rejected, (state: any) => {
            state.isLoadingOrderAddress = false;
          })
          .addCase(cartListDataApi.pending, (state: any, _: any) => {
            state.isLoadingCartList = true;
            state.cartListData = null;
            state.isSuccess = false;
          })
          .addCase(cartListDataApi.fulfilled, (state: any, action: any) => {
            state.isLoadingCartList = false;
            state.cartListData = action.payload;
            state.isSuccess = true;
          })
          .addCase(cartListDataApi.rejected, (state: any) => {
            state.isLoadingCartList = false;
            state.cartListData = null;
            state.isSuccess = false;
          })
          .addCase(cartSummaryDataApi.pending, (state: any, _: any) => {
            state.isLoadingCartSummary = true;
            state.cartSummaryData = null;
          })
          .addCase(cartSummaryDataApi.fulfilled, (state: any, action: any) => {
            state.isLoadingCartSummary = false;
            state.cartSummaryData = action.payload;
          })
          .addCase(cartSummaryDataApi.rejected, (state: any) => {
            state.isLoadingCartSummary = false;
            state.cartSummaryData = null;
          })
          .addCase(orderSaveaApi.pending, (state: any, _: any) => {
            state.isLoadingSaveOrder = true;
            state.saveOrderData = null;
          })
          .addCase(orderSaveaApi.fulfilled, (state: any, action: any) => {
            state.isLoadingSaveOrder = false;
            state.saveOrderData = action.payload;
          })
          .addCase(orderSaveaApi.rejected, (state: any) => {
            state.isLoadingSaveOrder = false;
            state.saveOrderData = null;
          })
          .addCase(updateCartApi.pending, (state: any, _: any) => {
            state.isLoadingUpdateCart = true;
            state.updateCartData = null;
          })
          .addCase(updateCartApi.fulfilled, (state: any, action: any) => {
            state.isLoadingUpdateCart = false;
            state.updateCartData = action.payload;
          })
          .addCase(updateCartApi.rejected, (state: any) => {
            state.isLoadingUpdateCart = false;
            state.updateCartData = null;
          })
          .addCase(deleteCartProductApi.pending, (state: any, _: any) => {
            state.isLoadingDeleteCartProduct = true;
          })
          .addCase(deleteCartProductApi.fulfilled, (state: any, action: any) => {
              state.isLoadingDeleteCartProduct = false;
           })
          .addCase(deleteCartProductApi.rejected, (state: any) => {
            state.isLoadingDeleteCartProduct = false;
          })
          .addCase(getOrderHistory.pending, (state: any, _: any) => {
            state.isLoadingOrderHistory = true;
            state.orderHistoryData = null;
          })
          .addCase(getOrderHistory.fulfilled, (state: any, action: any) => {
            state.isLoadingOrderHistory = false;
            state.orderHistoryData = action.payload;
          })
          .addCase(getOrderHistory.rejected, (state: any) => {
            state.isLoadingOrderHistory = false;
            state.orderHistoryData = null;
          })
          .addCase(getOrderDetails.pending, (state: any, _: any) => {
            state.isLoadingOrderDetails = true;
            state.orderDetailsData = null;
          })
          .addCase(getOrderDetails.fulfilled, (state: any, action: any) => {
            state.isLoadingOrderDetails = false;
            state.orderDetailsData = action.payload;
          })
          .addCase(getOrderDetails.rejected, (state: any) => {
            state.isLoadingOrderDetails = false;
            state.orderDetailsData = null;
          })
          .addCase(addShippindCostApi.pending, (state: any, _: any) => {
            state.isLoadingShippingCost = true;
            state.shippingPriceData = null;
          })
          .addCase(addShippindCostApi.fulfilled, (state: any, action: any) => {
            state.isLoadingShippingCost = false;
            state.shippingPriceData = action.payload;
          })
          .addCase(addShippindCostApi.rejected, (state: any) => {
            state.isLoadingShippingCost = false;
            state.shippingPriceData = null;
          })
          .addCase(getOrderItems.pending, (state: any, _: any) => {
            state.isLoadingOrderItems = true;
            state.orderItemeData = null;
          })
          .addCase(getOrderItems.fulfilled, (state: any, action: any) => {
            state.isLoadingOrderItems = false;
            state.orderItemeData = action.payload;
          })
          .addCase(getOrderItems.rejected, (state: any) => {
            state.isLoadingOrderItems = false;
            state.orderItemeData = null;
          })
          .addCase(paymentWithRazorPayApi.pending, (state: any, _: any) => {
            state.isLoadingOrderWithRazorpay = true;
          })
          .addCase(paymentWithRazorPayApi.fulfilled, (state: any, action: any) => {
            state.isLoadingOrderWithRazorpay = false;
          })
          .addCase(paymentWithRazorPayApi.rejected, (state: any) => {
            state.isLoadingOrderWithRazorpay = false;
          })
          .addCase(paymentConfirmationRazorPayApi.pending, (state: any, _: any) => {
            state.isLoadingOrderWithRazorpay = true;
            state.OrderWithRazorpayData = null;
          })
          .addCase(paymentConfirmationRazorPayApi.fulfilled, (state: any, action: any) => {
            state.isLoadingOrderWithRazorpay = false;
            state.OrderWithRazorpayData = action.payload;
          })
          .addCase(paymentConfirmationRazorPayApi.rejected, (state: any) => {
            state.isLoadingOrderWithRazorpay = false;
            state.OrderWithRazorpayData = null;
          })
    }
});

export const { resetOrder, resetOrderSuccess } = orderDataReducer.actions;
export default orderDataReducer.reducer;
