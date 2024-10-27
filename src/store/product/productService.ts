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

const productService = {
  productDetailApi,
  relatedProductApi
};

export default productService;
