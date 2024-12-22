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

const orderService = {
  updateOrderAddressApi,
  cartListApi,
  cartSummaryApi,
  saveOrderApi,
  updateCart
};

export default orderService;
