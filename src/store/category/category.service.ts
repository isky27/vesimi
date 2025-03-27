import axios from 'axios'
import { priceRange } from '../../constant';

const subcategoryApi = async (userData: any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.get(`sub-categories/${userData?.categoryId}`));
    return response;
  } catch (error: any) {
    throw error;
  }
};


const searchProductApi = async (userData: any): Promise<ApiResponse> => {
  try {
    let searchQuery = "sort_by=price_low_to_high"

    if(userData?.min){
      searchQuery += `&min=${userData?.min}`
    }else{
      searchQuery += `&min=${priceRange[0]}`
    }

    if(userData?.max){
      searchQuery +=`&max=${userData?.max}`
    }else{
      searchQuery +=`&max=${priceRange[1]}`
    }

    if(userData?.color){
      searchQuery +=`&color=${userData?.color}` 
    }

    if(userData?.category){
      searchQuery += `&categories=${userData?.category}`
    }

    if(userData?.size){
      searchQuery += `&selected_attribute_values[]=${userData?.size}`
    }

    if(userData?.designer){
      searchQuery +=`&selected_attribute_values[]=${userData?.designer}` 
    }

    if(userData?.name){
      searchQuery += `&name=${userData?.name}`
    }

    if (userData?.sale) {
      searchQuery += `&sale=${userData?.sale}`;
    }

    const response: ApiResponse = await axios.get(`/products/search?${searchQuery}&page=${userData?.page || 1}`);
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
   categoryProductApi,
   searchProductApi
};

export default categoryService;
