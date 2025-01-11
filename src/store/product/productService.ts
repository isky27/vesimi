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
    const response: ApiResponse = (await axios.post("carts/add", userData ));
    return response;
  } catch (error: any) {
    throw error;
  }
};

const addWishListProductApi = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.post("wishlists", userData ));
    return response;
  } catch (error: any) {
    throw error;
  }
};

const productService = {
  productDetailApi,
  relatedProductApi,
  addToCartApi,
  addWishListProductApi
};

export default productService;
