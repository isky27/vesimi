import axios from 'axios'
import { toast } from 'react-toastify';

const updateOrderAddressApi = async (payload:any, userToken: { headers: { Authorization: string } }): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.post("update-address-in-cart", payload, userToken);
    return response;
  } catch (error: any) {
    throw error;
  }
};

const cartListApi = async (userData: any): Promise<ApiResponse> => {
    try {
      const response: ApiResponse = (await axios.post("/carts", userData ));
      return response;
    } catch (error: any) {
      throw error;
    }
  };

const updateCart = async (userData: any, userToken: { headers: { Authorization: string } }): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.post("/carts/process", userData, userToken ));
    return response;
  } catch (error: any) {
    throw error;
  }
};
  
const cartSummaryApi = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.get(`/cart-summary/${userData?.user_id}`));
    return response;
  } catch (error: any) {
    throw error;
  }
};

const saveOrderApi = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.post(`/order/store`, userData));

    toast.success("Your order has been placed successfully.")
    return response;
  } catch (error: any) {
    throw error;
  }
};

const deleteCartProduct = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.delete(`carts/${userData?.cartId}`));
    toast.success(response?.message)
    return response;
  } catch (error: any) {
    throw error;
  }
};

const addShippingPrice = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.post("/shipping_cost", userData);
    return response;
  } catch (error: any) {
    throw error;
  }
};

const orderHistoryApi = async (userData: any): Promise<ApiResponse> => {
   try {
     const response: ApiResponse = await axios.get(`purchase-history/${userData?.user_id}?page=${userData?.page}`);
     return response;
   } catch (error: any) {
     throw error;
   }
};

const orderDetailsApi = async (userData: any): Promise<ApiResponse> => {
   try {
     const response: ApiResponse = await axios.get(`purchase-history-details/${userData?.orderId}`);
     return response;
   } catch (error: any) {
     throw error;
   }
}

const orderHistoryItemsApi = async (userData: any): Promise<ApiResponse> => {
   try {
     const response: ApiResponse = await axios.get(`purchase-history-items/${userData?.orderId}`);
     return response;
   } catch (error: any) {
     throw error;
   }
}

const orderService = {
  updateOrderAddressApi,
  cartListApi,
  cartSummaryApi,
  saveOrderApi,
  updateCart,
  deleteCartProduct,
  orderHistoryApi,
  orderDetailsApi,
  addShippingPrice,
  orderHistoryItemsApi
};

export default orderService;
