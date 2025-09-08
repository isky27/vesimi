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


const getWishListProductApi = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.get(`wishlists/${userData?.userId}`);
    return response;
  } catch (error: any) {
    throw error;
  }
};

const removeWishlistApi =  async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = await axios.get(`wishlists-remove-product?product_id=${userData?.productId}&user_id=${userData?.userId}`);
    return response;
  } catch (error: any) {
    throw error;
  }
};

const productService = {
  productDetailApi,
  relatedProductApi,
  addToCartApi,
  addWishListProductApi,
  getWishListProductApi,
  removeWishlistApi
};

export default productService;
