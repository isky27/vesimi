import axios from 'axios'

const headerMenuApi = async (): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.get("categories/all")).data;
    return response;
  } catch (error: any) {
    throw error;
  }
};

const mainSlider = async (): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.get("sliders")).data;
    return response;
  } catch (error: any) {
    throw error;
  }
};

const newDropsApi = async (): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.get("categories/top")).data;
    return response;
  } catch (error: any) {
    throw error;
  }
};

const featureCagtegoryApi = async (): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.get("categories/featured")).data;
    return response;
  } catch (error: any) {
    throw error;
  }
};

const featureProductApi = async (): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.get("products/featured")).data;
    return response;
  } catch (error: any) {
    throw error;
  }
};

const bestSellerProductApi = async (): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.get("products/best-seller")).data;
    return response;
  } catch (error: any) {
    throw error;
  }
};

const searchProductApi = async (useData:any): Promise<ApiResponse> => {
  try {
    const response: ApiResponse = (await axios.get(`products/search?${useData}`)).data;
    return response;
  } catch (error: any) {
    throw error;
  }
};


const homeService = {
  headerMenuApi,
  mainSlider,
  newDropsApi,
  featureCagtegoryApi,
  featureProductApi,
  bestSellerProductApi,
  searchProductApi
};

export default homeService;
