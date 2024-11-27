import axios from 'axios'

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
  
  const cartSummaryApi = async (userData: any): Promise<ApiResponse> => {
    try {
      const response: ApiResponse = (await axios.get(`/cart-summary/${userData?.user_id}`));
      return response;
    } catch (error: any) {
      throw error;
    }
  };

const orderService = {
  updateOrderAddressApi,
  cartListApi,
  cartSummaryApi
};

export default orderService;
