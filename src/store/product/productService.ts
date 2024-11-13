import axios from 'axios'

const productDetailApi = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.get(`products/${userData?.productId}`));
    return response;
  } catch (error: any) {
    throw error;
  }
};

const relatedProductApi = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.get(`products/related/${userData?.productId}`));
    return response;
  } catch (error: any) {
    throw error;
  }
};

const addToCartApi = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.post("/carts/add", userData ));
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

const productService = {
  productDetailApi,
  relatedProductApi,
  addToCartApi,
  cartListApi,
  cartSummaryApi
};

export default productService;
