import axios from 'axios'

const subcategoryApi = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.get(`sub-categories/${userData?.categoryId}`));
    return response;
  } catch (error: any) {
    throw error;
  }
};

const categoryProductApi = async (userData: any): Promise<ApiResponse> => {
  try {
    const params: Record<string, any> = {};
    if (userData.pageSize) {
      params.page_size = userData.pageSize;
    }
    const response: ApiResponse = await axios.get(
      `products/category/${userData?.categoryId}`,
      { params }
    );
    return response;
  } catch (error: any) {
    throw error;
  }
};

const categoryService = {
   subcategoryApi,
   categoryProductApi
};

export default categoryService;
